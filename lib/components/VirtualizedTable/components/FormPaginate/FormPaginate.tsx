import { FormEvent, useCallback, useRef } from 'react';

import { Input } from '@/components/Input/Input';

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
    >
      <span className="min-w-fit dark:text-metal-300">Jump to</span>
      <Input
        type="number"
        className="w-18 text-xs no-spinner dark:bg-metal-800 dark:border-metal-700 dark:text-metal-300"
        name="jump-to"
        min={1}
        max={totalPages}
        required
        autoComplete="off"
      />
      <button
        type="submit"
        className="text-xs text-blue-600 p-2 cursor-pointer dark:text-aurora-500"
      >
        Go
      </button>
    </form>
  );
};
