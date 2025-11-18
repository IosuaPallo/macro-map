'use client';

import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useCallback, useEffect } from 'react';

interface SearchBarProps {
  onSearch: (term: string) => void;
  placeholder?: string;
  debounceMs?: number;
}

export function SearchBar({
  onSearch,
  placeholder = 'Search shortcuts...',
  debounceMs = 300,
}: SearchBarProps) {
  const [value, setValue] = useState('');

  const debouncedSearch = useCallback(() => {
    onSearch(value);
  }, [value, onSearch]);

  useEffect(() => {
    const timer = setTimeout(debouncedSearch, debounceMs);
    return () => clearTimeout(timer);
  }, [value, debouncedSearch, debounceMs]);

  return (
    <TextField
      fullWidth
      size="small"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: 'text.secondary' }} />
          </InputAdornment>
        ),
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '0.5rem',
        },
      }}
    />
  );
}
