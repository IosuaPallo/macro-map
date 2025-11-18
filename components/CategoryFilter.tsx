'use client';

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Box,
  Typography,
} from '@mui/material';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const handleChange = (event: SelectChangeEvent<string | null>) => {
    const value = event.target.value;
    onCategoryChange(value === '' ? null : value);
  };

  return (
    <FormControl fullWidth size="small">
      <InputLabel id="category-select-label">Filter by Category</InputLabel>
      <Select
        labelId="category-select-label"
        id="category-select"
        value={selectedCategory || ''}
        label="Filter by Category"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>All Categories</em>
        </MenuItem>
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
