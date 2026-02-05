import { FC, useState, useCallback } from 'react';

import { CheckCircleIcon, CopyIcon } from '../../../../lib/assets/icons/components';
import { cn } from '../../../../lib/utils';

import type { Props } from './IconCard.types';

export const IconCard: FC<Props> = ({ name, IconComponent }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    const code = `import { ${name} } from '@konstructio/ui/icons';

<${name} size={24} />`;
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [name]);

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        'group relative flex flex-col items-center justify-center gap-3 p-4 rounded-lg border transition-all cursor-pointer',
        'hover:scale-105 hover:shadow-md',
        'border-metal-200 bg-white hover:border-aurora-500 hover:bg-aurora-50',
      )}
    >
      {copied ? (
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-aurora-50">
          <div className="flex items-center gap-2">
            <CheckCircleIcon size={20} className="text-aurora-400" />
            <span className="text-sm font-medium text-aurora-400">Copied!</span>
          </div>
        </div>
      ) : null}

      <IconComponent
        size={32}
        className="transition-colors text-metal-600 group-hover:text-aurora-500"
      />

      <span className="text-xs text-center break-all leading-tight text-metal-500 group-hover:text-aurora-900 transition-colors">
        {name.replace('Icon', '')}
      </span>

      <CopyIcon
        size={14}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-aurora-500"
      />
    </button>
  );
};
