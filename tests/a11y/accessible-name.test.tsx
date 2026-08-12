import { render, screen } from '@testing-library/react';
import { ReactElement } from 'react';

import { ButtonGroup } from '@/components/ButtonGroup/ButtonGroup';
import { Checkbox } from '@/components/Checkbox/Checkbox';
import { ImageUpload } from '@/components/ImageUpload/ImageUpload';
import { Input } from '@/components/Input/Input';
import { PhoneNumberInput } from '@/components/PhoneNumberInput/PhoneNumberInput';
import { Select } from '@/components/Select/Select';
import { Switch } from '@/components/Switch/Switch';
import { TextArea } from '@/components/TextArea/TextArea';
import { TimePicker } from '@/components/TimePicker/TimePicker';

const LABEL = 'My label';

type Case = {
  name: string;
  role: string;
  render: (props: {
    label: string;
    name?: string;
    id?: string;
  }) => ReactElement;
};

const CASES: Case[] = [
  {
    name: 'Input',
    role: 'textbox',
    render: (props) => {
      return <Input {...props} />;
    },
  },
  {
    name: 'TextArea',
    role: 'textbox',
    render: (props) => {
      return <TextArea {...props} />;
    },
  },
  {
    name: 'Checkbox',
    role: 'checkbox',
    render: (props) => {
      return <Checkbox {...props} />;
    },
  },
  {
    name: 'Switch',
    role: 'switch',
    render: (props) => {
      return <Switch {...props} />;
    },
  },
  {
    name: 'Select',
    role: 'combobox',
    render: (props) => {
      return (
        <Select {...props} options={[{ label: 'Option 1', value: 'one' }]} />
      );
    },
  },
  {
    name: 'PhoneNumberInput',
    role: 'textbox',
    render: (props) => {
      return <PhoneNumberInput {...props} />;
    },
  },
  {
    name: 'TimePicker',
    role: 'button',
    render: (props) => {
      return <TimePicker {...props} />;
    },
  },
  {
    name: 'ButtonGroup',
    role: 'radiogroup',
    render: (props) => {
      return (
        <ButtonGroup
          {...props}
          options={[{ value: 'one', label: 'Option 1' }]}
        />
      );
    },
  },
];

describe('accessible name', () => {
  describe.each(CASES)('$name', ({ role, render: renderCase }) => {
    it.each([
      ['label only', {}],
      ['label and name', { name: 'field-name' }],
      ['label and id', { id: 'field-id' }],
      ['label, name and id', { name: 'field-name', id: 'field-id' }],
    ])('should expose its label as accessible name with %s', (_, extra) => {
      render(renderCase({ label: LABEL, ...extra }));

      expect(screen.getByRole(role, { name: LABEL })).toBeInTheDocument();
    });
  });

  describe('ImageUpload', () => {
    it.each([
      ['label only', {}],
      ['label and name', { name: 'field-name' }],
    ])('should expose its label as accessible name with %s', (_, extra) => {
      render(<ImageUpload label={LABEL} {...extra} />);

      expect(screen.getByLabelText(LABEL)).toHaveAccessibleName(LABEL);
    });
  });
});
