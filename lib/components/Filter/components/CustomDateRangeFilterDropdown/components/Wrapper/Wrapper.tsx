import { FC, useState } from 'react';

import { Button } from '@/components/Button/Button';
import { filterButtonVariants } from '@/components/Filter/Filter.variants';
import { useFilterSheet } from '@/components/Filter/hooks';
import { cn } from '@/utils';

import { FilterDropdown } from '../../../FilterDropdown/FilterDropdown';
import { useCustomDateRangeFilterDropdown } from '../../contexts';
import { Actions } from '../Actions/Actions';
import { MobilePresets } from '../MobilePresets/MobilePresets';
import { PanelActions } from '../PanelActions/PanelActions';
import { Picker } from '../Picker/Picker';
import { Trigger } from '../Trigger/Trigger';

const CUSTOM_RANGE_STEP = 1;

export const Wrapper: FC = () => {
  const {
    appliedRangeLabel,
    hasPendingSelection,
    isOpen,
    label,
    labelReset,
    position,
    presets,
    selectedPreset,
    onOpenChange,
    onPresetChange,
    onReset,
  } = useCustomDateRangeFilterDropdown();
  const isSheet = useFilterSheet();
  const [sheetStep, setSheetStep] = useState(0);

  const triggerClassName = cn(filterButtonVariants(), {
    'text-slate-700': isOpen,
  });

  if (!isSheet) {
    return (
      <FilterDropdown
        isOpen={isOpen}
        position={position}
        triggerClassName={triggerClassName}
        trigger={<Trigger />}
        onOpenChange={onOpenChange}
      >
        <Picker />
        <Actions />
      </FilterDropdown>
    );
  }

  const now = new Date();
  const customPreset = presets.find((option) => {
    const range = option.resolve(now);

    return !range.from && !range.to;
  });
  const isCustomStep = sheetStep === CUSTOM_RANGE_STEP;
  const opensOnCalendar =
    Boolean(appliedRangeLabel) && selectedPreset === customPreset?.value;
  const showsClear = Boolean(appliedRangeLabel) || hasPendingSelection;

  const handleOpenChange = (open: boolean) => {
    setSheetStep(open && opensOnCalendar ? CUSTOM_RANGE_STEP : 0);
    onOpenChange(open);
  };

  const handleBack = () => {
    onPresetChange(null, {});
    setSheetStep(0);
  };

  const presetsStep = (
    <>
      <MobilePresets onCustomRange={() => setSheetStep(CUSTOM_RANGE_STEP)} />
      {showsClear && (
        <div className="px-4 pt-4">
          <Button
            variant="secondary"
            appearance="compact"
            className="h-11! w-full"
            onClick={onReset}
          >
            {labelReset}
          </Button>
        </div>
      )}
    </>
  );

  return (
    <FilterDropdown
      isOpen={isOpen}
      triggerClassName={triggerClassName}
      trigger={<Trigger />}
      sheetTitle={isCustomStep ? (customPreset?.label ?? label) : label}
      sheetStep={sheetStep}
      sheetPreviousContent={isCustomStep ? presetsStep : undefined}
      onSheetBack={isCustomStep ? handleBack : undefined}
      onOpenChange={handleOpenChange}
    >
      {isCustomStep ? (
        <>
          <Picker isSheet />
          <div className="px-4 pt-4">
            <PanelActions isSheet />
          </div>
        </>
      ) : (
        presetsStep
      )}
    </FilterDropdown>
  );
};
