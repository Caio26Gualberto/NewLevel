import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Checkbox, Chip, FormControl, InputLabel, MenuItem, Select, OutlinedInput } from '@mui/material';
import ApiConfiguration from '../../apiConfig';
import { CommonApi, EGitLabels, SelectOptionDto } from '../../gen/api/src';
import NewLevelButton from '../../components/NewLevelButton';
import NewLevelLoading from '../../components/NewLevelLoading';
import Swal from 'sweetalert2';

const IssueReport = () => {
    const commonApi = new CommonApi(ApiConfiguration);
    const [loading, setLoading] = useState<boolean>(false);
    const [problemTypes, setProblemTypes] = useState<SelectOptionDto[]>([]);
    const [devices, setDevices] = useState<SelectOptionDto[]>([]);
    const [selectedProblemTypes, setSelectedProblemTypes] = useState<number[]>([]);
    const [selectedDevices, setSelectedDevices] = useState<number[]>([]);
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleProblemTypeChange = (event: any) => {
        setSelectedProblemTypes(event.target.value);
    };

    const handleDeviceChange = (event: any) => {
        setSelectedDevices(event.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        debugger

        try {
            setLoading(true)
            const allLabels = [...selectedDevices, ...selectedProblemTypes]
            const result = await commonApi.apiCommonCreateIssuePost({
                createGitIssueInput: {
                    description: formData.description,
                    title: formData.title,
                    gitLabels: allLabels as EGitLabels[]
                }
            })

            if (result.isSuccess) {
                Swal.fire({
                    title: result.message,
                    text: `O problema foi criado com sucesso. Confira aqui: ${result.data}`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            } else {
                Swal.fire({
                    title: 'Erro',
                    text: (result as any).message!,
                    icon: 'error'
                })
            }
        } catch (error) {

        } finally {
            setLoading(false)
        }
        console.log(formData);
    };

    React.useEffect(() => {
        (async () => {
            try {
                const result = (await commonApi.apiCommonGetDisplayGitLabelsGet()).data;
                if (result === undefined || result === null) {
                    return;
                }
                setProblemTypes(result.filter(x => x.value == 1 || x.value == 2));
                setDevices(result.filter(x => x.value == 3 || x.value == 4));
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);

    return (
        <Container component="main" maxWidth="md">
            <NewLevelLoading isLoading={loading} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    bgcolor: '#fff',
                    borderRadius: 1,
                    boxShadow: 3,
                    p: 3,
                    mt: 5,
                    width: '100%',
                }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Reportar um Problema
                </Typography>
                <form noValidate style={{ width: "100%" }}>
                    <TextField
                        label="Título"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        label="Descrição"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        required
                    />
                    <FormControl fullWidth style={{ marginTop: 16 }}>
                        <InputLabel>Problema/Sugestão</InputLabel>
                        <Select
                            multiple
                            input={<OutlinedInput label="Problema/Sugestão" />}
                            value={selectedProblemTypes}
                            onChange={handleProblemTypeChange}
                            renderValue={(selected) => (
                                <div>
                                    {selected.map((value) => (
                                        <Chip key={value} label={problemTypes.find(option => option.value === value)?.name} />
                                    ))}
                                </div>
                            )}
                            sx={{
                                maxHeight: 200, // Define uma altura máxima para o menu
                            }}
                        >
                            {problemTypes.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    <Checkbox checked={selectedProblemTypes.includes(option.value!)} />
                                    {option.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth style={{ marginTop: 16, marginBottom: 16 }}>
                        <InputLabel>Dispositivos</InputLabel>
                        <Select
                            multiple
                            input={<OutlinedInput label="Dispositivos" />}
                            value={selectedDevices}
                            onChange={handleDeviceChange}
                            renderValue={(selected) => (
                                <div>
                                    {selected.map((value) => (
                                        <Chip key={value} label={devices.find(option => option.value === value)?.name} />
                                    ))}
                                </div>
                            )}
                            sx={{
                                maxHeight: 200
                            }}
                        >
                            {devices.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    <Checkbox checked={selectedDevices.includes(option.value!)} />
                                    {option.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <NewLevelButton onClick={(e: any) => { e.preventDefault(); handleSubmit(e); }} title='Enviar' maxWidth />
                </form>
            </Box>
        </Container>
    );
};

export default IssueReport;
