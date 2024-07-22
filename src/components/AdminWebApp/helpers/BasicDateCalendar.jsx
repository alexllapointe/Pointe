import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box } from '@mui/material';
import dayjs from 'dayjs';
import NoteDataAlert from './NoteDataAlert'; // Ensure the path is correct

const BasicDateCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [open, setOpen] = useState(false);
    const [notes, setNotes] = useState({}); // Initialize notes as an object

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: { xs: '100%', sm: '75%', md: '50%', }, height: '100%' }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateCalendar
                        value={selectedDate}
                        onChange={handleDateChange}
                        sx={{
                            '& .MuiPickersDay-root': {
                                '&.Mui-selected': {
                                    backgroundColor: '#37d98f', // trueGreen
                                },
                                '&.Mui-selected:hover': {
                                    backgroundColor: '#37d98f', // trueGreen
                                },
                                '&.Mui-selected.Mui-focusVisible': {
                                    backgroundColor: '#37d98f', // trueGreen
                                },
                            },
                            '& .MuiPickersCalendarHeader-root': {
                                backgroundColor: '#F3F4F6', // trueGreen
                            },
                            '& .MuiPickersArrowSwitcher-root .MuiButtonBase-root': {
                                color: '#37d98f', // trueGreen
                            },
                            height: '100%',
                        }}
                        className='text-midnightBlack'
                    />
                </LocalizationProvider>
                <NoteDataAlert
                    open={open}
                    onClose={handleClose}
                    notes={notes}
                    setNotes={setNotes}
                    selectedDate={selectedDate}
                />
            </Box>
        </Box>
    );
};

export default BasicDateCalendar;
