import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import { ImageUpload } from './ImageUpload';
import { ImageUploadStatus } from './ImageUpload.types';

describe('ImageUpload', () => {
  it('should associate the label with the file input', () => {
    render(<ImageUpload label="Profile picture" name="avatar" />);

    expect(screen.getByLabelText('Profile picture')).toHaveAttribute(
      'type',
      'file',
    );
  });

  it('should expose the label as the accessible name', () => {
    render(<ImageUpload label="Profile picture" name="avatar" />);

    const input = screen.getByLabelText('Profile picture');

    expect(input).not.toHaveAttribute('aria-label');
  });

  it('should describe the input with its helper text', () => {
    render(
      <ImageUpload
        label="Profile picture"
        name="avatar"
        helperText="PNG or SVG, max 5MB"
      />,
    );

    const input = screen.getByLabelText('Profile picture');

    expect(input).not.toHaveAttribute('aria-invalid');
    expect(input).toHaveAccessibleDescription('PNG or SVG, max 5MB');
  });

  it('should describe the input with its error message', () => {
    render(
      <ImageUpload
        label="Profile picture"
        name="avatar"
        error="File is too large"
      />,
    );

    const input = screen.getByLabelText('Profile picture');

    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAccessibleDescription('File is too large');
  });

  it('should flag the error status as invalid', () => {
    render(
      <ImageUpload
        label="Profile picture"
        name="avatar"
        status={ImageUploadStatus.Error}
      />,
    );

    expect(screen.getByLabelText('Profile picture')).toHaveAttribute(
      'aria-invalid',
      'true',
    );
  });

  it('should expose the required state', () => {
    render(<ImageUpload label="Profile picture" name="avatar" isRequired />);

    expect(screen.getByLabelText(/Profile picture/)).toHaveAttribute(
      'aria-required',
      'true',
    );
  });

  it('should keep the required marker out of the accessible name', () => {
    render(<ImageUpload label="Profile picture" name="avatar" isRequired />);

    expect(screen.getByLabelText(/Profile picture/)).toHaveAccessibleName(
      'Profile picture',
    );
  });

  it("shouldn't have accessibility violations", async () => {
    const { container } = render(
      <ImageUpload label="Profile picture" name="avatar" />,
    );

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
