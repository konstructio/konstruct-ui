import { FormEvent, useCallback, useRef } from 'react';

import { Input } from '@/components/Input/Input';
import { Typography } from '@/components/Typography/Typography';
import { Button } from '@/components/Button/Button';

import { useTableContext } from '../../contexts';

export const FormPaginate = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { totalPages, handlePage } = useTableContext();

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const jumpTo = Number(formData.get('jump-to'));
      const newPage = (jumpTo < totalPages ? jumpTo : totalPages) || 1;

      handlePage(newPage - 1);
      formRef.current?.reset();
    },
    [handlePage, totalPages],
  );

  return (
    <form
      aria-label="footer-pagination"
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex items-center gap-2"
      noValidate={true}
    >
      <Typography
        component="span"
        className="text-sm min-w-fit tracking-normal"
      >
        Jump to
      </Typography>
      <Input
        type="number"
        className="w-18 text-sm no-spinner"
        name="jump-to"
        min={1}
        max={totalPages}
        required
        autoComplete="off"
      />
      <Button
        variant="link"
        type="submit"
        className="text-xs p-2 cursor-pointer"
      >
        Go
      </Button>
    </form>
  );
};
