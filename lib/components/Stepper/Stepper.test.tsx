import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Stepper } from './Stepper';
import type { Step, StepperProps } from './Stepper.types';

describe('Stepper', () => {
  const defaultSteps: Step[] = [
    { id: 1, label: 'Select platform', status: 'completed' },
    { id: 2, label: 'Set up cluster', status: 'active' },
    { id: 3, label: 'Preparing', status: 'pending' },
  ];

  const defaultProps: StepperProps = {
    steps: defaultSteps,
  };

  const setup = (props?: Partial<StepperProps>) => {
    const { container: component } = render(
      <Stepper {...defaultProps} {...props} />,
    );
    const user = userEvent.setup();

    const getNavigation = () =>
      screen.getByRole('navigation', { name: /progress/i });
    const getList = () => screen.getByRole('list');
    const getListItems = () => within(getList()).getAllByRole('listitem');
    const queryListItems = () => within(getList()).queryAllByRole('listitem');
    const getStepByLabel = (label: string | RegExp) =>
      screen.getByLabelText(label);
    const queryStepByLabel = (label: string | RegExp) =>
      screen.queryByLabelText(label);
    const getStepText = (text: string) => screen.getByText(text);
    const getAllButtons = () => screen.getAllByRole('button');
    const queryAllButtons = () => screen.queryAllByRole('button');

    return {
      component,
      user,
      getNavigation,
      getList,
      getListItems,
      queryListItems,
      getStepByLabel,
      queryStepByLabel,
      getStepText,
      getAllButtons,
      queryAllButtons,
    };
  };

  describe('Rendering', () => {
    it('should render all step labels', () => {
      const { getStepText } = setup();

      expect(getStepText('Select platform')).toBeInTheDocument();
      expect(getStepText('Set up cluster')).toBeInTheDocument();
      expect(getStepText('Preparing')).toBeInTheDocument();
    });

    it('should render as a navigation landmark with proper label', () => {
      const { getNavigation } = setup();

      expect(getNavigation()).toBeInTheDocument();
    });

    it('should render steps in an ordered list', () => {
      const { getListItems } = setup();

      expect(getListItems()).toHaveLength(3);
    });

    it('should render step descriptions when provided', () => {
      const stepsWithDescription: Step[] = [
        {
          id: 1,
          label: 'Account setup',
          description: 'Create your account',
          status: 'active',
        },
      ];

      const { getStepText } = setup({ steps: stepsWithDescription });

      expect(getStepText('Create your account')).toBeInTheDocument();
    });

    it('should render step numbers for pending steps', () => {
      const { getStepText } = setup();

      expect(getStepText('3')).toBeInTheDocument();
    });

    it('should render step numbers for active steps', () => {
      const { getStepText } = setup();

      expect(getStepText('2')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have no accessibility violations', async () => {
      const { component } = setup();

      const results = await axe(component);

      expect(results).toHaveNoViolations();
    });

    it('should mark active step with aria-current="step"', () => {
      const { getStepByLabel } = setup();

      const activeStep = getStepByLabel(/step 2.*current/i);

      expect(activeStep).toHaveAttribute('aria-current', 'step');
    });

    it('should include completed status in aria-label', () => {
      const { getStepByLabel } = setup();

      expect(getStepByLabel(/step 1.*completed/i)).toBeInTheDocument();
    });

    it('should include error status in aria-label', () => {
      const stepsWithError: Step[] = [
        { id: 1, label: 'Validation', status: 'error' },
      ];

      const { getStepByLabel } = setup({ steps: stepsWithError });

      expect(getStepByLabel(/step 1.*error/i)).toBeInTheDocument();
    });

    it('should allow keyboard activation with Enter key when clickable', async () => {
      const handleClick = vi.fn();
      const { user, getStepByLabel } = setup({
        clickable: true,
        onStepClick: handleClick,
      });

      const firstStep = getStepByLabel(/step 1/i);
      firstStep.focus();

      await user.keyboard('{Enter}');

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should allow keyboard activation with Space key when clickable', async () => {
      const handleClick = vi.fn();
      const { user, getStepByLabel } = setup({
        clickable: true,
        onStepClick: handleClick,
      });

      const firstStep = getStepByLabel(/step 1/i);
      firstStep.focus();

      await user.keyboard(' ');

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should be focusable when clickable', () => {
      const { getStepByLabel } = setup({ clickable: true });

      expect(getStepByLabel(/step 1/i)).toHaveAttribute('tabIndex', '0');
    });

    it('should not be focusable when not clickable', () => {
      const { getStepByLabel } = setup({ clickable: false });

      expect(getStepByLabel(/step 1/i)).not.toHaveAttribute('tabIndex');
    });
  });

  describe('Click Interaction', () => {
    it('should call onStepClick with step data and index when clicked', async () => {
      const handleClick = vi.fn();
      const { user, getStepByLabel } = setup({
        clickable: true,
        onStepClick: handleClick,
      });

      // Click on completed step (not active)
      await user.click(getStepByLabel(/step 1/i));

      expect(handleClick).toHaveBeenCalledWith(
        expect.objectContaining({ label: 'Select platform' }),
        0,
      );
    });

    it('should not trigger callback when clicking active step', async () => {
      const handleClick = vi.fn();
      const { user, getStepText } = setup({
        clickable: true,
        onStepClick: handleClick,
      });

      // Active step should not be clickable
      await user.click(getStepText('Set up cluster'));

      expect(handleClick).not.toHaveBeenCalled();
    });

    it('should not trigger callback when clicking non-clickable stepper', async () => {
      const handleClick = vi.fn();
      const { user, getStepText } = setup({
        clickable: false,
        onStepClick: handleClick,
      });

      await user.click(getStepText('Select platform'));

      expect(handleClick).not.toHaveBeenCalled();
    });

    it('should have button role only for non-active steps when clickable', () => {
      const { getAllButtons } = setup({ clickable: true });

      // Only completed and pending steps are clickable, not active
      expect(getAllButtons()).toHaveLength(2);
    });

    it('should not have button role when not clickable', () => {
      const { queryAllButtons } = setup({ clickable: false });

      expect(queryAllButtons()).toHaveLength(0);
    });

    it('should call onStepClick for each clickable step', async () => {
      const handleClick = vi.fn();
      const { user, getAllButtons } = setup({
        clickable: true,
        onStepClick: handleClick,
      });

      for (const step of getAllButtons()) {
        await user.click(step);
      }

      // Only 2 steps are clickable (completed and pending, not active)
      expect(handleClick).toHaveBeenCalledTimes(2);
    });

    it('should not trigger callback when clicking disabled step', async () => {
      const handleClick = vi.fn();
      const stepsWithDisabled: Step[] = [
        { id: 1, label: 'Step 1', status: 'completed', disabled: true },
        { id: 2, label: 'Step 2', status: 'pending' },
      ];
      const { user, getStepText } = setup({
        steps: stepsWithDisabled,
        clickable: true,
        onStepClick: handleClick,
      });

      await user.click(getStepText('Step 1'));

      expect(handleClick).not.toHaveBeenCalled();
    });

    it('should call step onClick callback when provided', async () => {
      const stepCallback = vi.fn();
      const globalCallback = vi.fn();
      const stepsWithCallback: Step[] = [
        { id: 1, label: 'Step 1', status: 'completed', onClick: stepCallback },
        { id: 2, label: 'Step 2', status: 'pending' },
      ];
      const { user, getStepByLabel } = setup({
        steps: stepsWithCallback,
        clickable: true,
        onStepClick: globalCallback,
      });

      await user.click(getStepByLabel(/step 1/i));

      expect(stepCallback).toHaveBeenCalled();
      expect(globalCallback).not.toHaveBeenCalled();
    });
  });

  describe('Status Auto-Calculation', () => {
    it('should mark steps before currentStep as completed', () => {
      const stepsWithoutStatus: Step[] = [
        { id: 1, label: 'Step 1' },
        { id: 2, label: 'Step 2' },
        { id: 3, label: 'Step 3' },
      ];

      const { getStepByLabel } = setup({
        steps: stepsWithoutStatus,
        currentStep: 2,
      });

      expect(getStepByLabel(/step 1.*completed/i)).toBeInTheDocument();
      expect(getStepByLabel(/step 2.*completed/i)).toBeInTheDocument();
      expect(getStepByLabel(/step 3.*current/i)).toBeInTheDocument();
    });

    it('should mark currentStep as active', () => {
      const stepsWithoutStatus: Step[] = [
        { id: 1, label: 'Step 1' },
        { id: 2, label: 'Step 2' },
      ];

      const { getStepByLabel } = setup({
        steps: stepsWithoutStatus,
        currentStep: 0,
      });

      expect(getStepByLabel(/step 1.*current/i)).toBeInTheDocument();
    });

    it('should mark steps after currentStep as pending', () => {
      const stepsWithoutStatus: Step[] = [
        { id: 1, label: 'Step 1' },
        { id: 2, label: 'Step 2' },
        { id: 3, label: 'Step 3' },
      ];

      const { queryStepByLabel } = setup({
        steps: stepsWithoutStatus,
        currentStep: 0,
      });

      expect(queryStepByLabel(/step 2.*completed/i)).not.toBeInTheDocument();
      expect(queryStepByLabel(/step 2.*current/i)).not.toBeInTheDocument();
      expect(queryStepByLabel(/step 3.*completed/i)).not.toBeInTheDocument();
    });

    it('should preserve explicit status over auto-calculated status', () => {
      const mixedSteps: Step[] = [
        { id: 1, label: 'Step 1', status: 'error' },
        { id: 2, label: 'Step 2' },
        { id: 3, label: 'Step 3' },
      ];

      const { getStepByLabel } = setup({ steps: mixedSteps, currentStep: 1 });

      expect(getStepByLabel(/step 1.*error/i)).toBeInTheDocument();
      expect(getStepByLabel(/step 2.*current/i)).toBeInTheDocument();
    });
  });

  describe('Orientation', () => {
    it('should render vertically by default', () => {
      const { getList } = setup();

      expect(getList()).toHaveClass('flex-col');
    });

    it('should render horizontally when specified', () => {
      const { getList } = setup({ orientation: 'horizontal' });

      expect(getList()).toHaveClass('flex-row');
    });
  });

  describe('Theme', () => {
    it('should apply dark theme via data attribute', () => {
      const { getNavigation } = setup({ theme: 'dark' });

      expect(getNavigation()).toHaveAttribute('data-theme', 'dark');
    });

    it('should apply light theme via data attribute', () => {
      const { getNavigation } = setup({ theme: 'light' });

      expect(getNavigation()).toHaveAttribute('data-theme', 'light');
    });

    it('should apply kubefirst theme via data attribute', () => {
      const { getNavigation } = setup({ theme: 'kubefirst' });

      expect(getNavigation()).toHaveAttribute('data-theme', 'kubefirst');
    });
  });

  describe('Size Variants', () => {
    it('should render with sm size without errors', () => {
      const { getNavigation, getStepText } = setup({ size: 'sm' });

      expect(getNavigation()).toBeInTheDocument();
      expect(getStepText('Select platform')).toBeInTheDocument();
    });

    it('should render with md size without errors', () => {
      const { getNavigation, getStepText } = setup({ size: 'md' });

      expect(getNavigation()).toBeInTheDocument();
      expect(getStepText('Select platform')).toBeInTheDocument();
    });

    it('should render with lg size without errors', () => {
      const { getNavigation, getStepText } = setup({ size: 'lg' });

      expect(getNavigation()).toBeInTheDocument();
      expect(getStepText('Select platform')).toBeInTheDocument();
    });
  });

  describe('Connector Visibility', () => {
    it('should render all steps with connectors by default', () => {
      const { getListItems } = setup();

      expect(getListItems()).toHaveLength(3);
    });

    it('should render all steps when showConnector is false', () => {
      const { getListItems } = setup({ showConnector: false });

      expect(getListItems()).toHaveLength(3);
    });
  });

  describe('Edge Cases', () => {
    it('should handle single step correctly', () => {
      const singleStep: Step[] = [
        { id: 1, label: 'Only step', status: 'active' },
      ];

      const { getStepText, getStepByLabel } = setup({ steps: singleStep });

      expect(getStepText('Only step')).toBeInTheDocument();
      expect(getStepByLabel(/step 1.*current/i)).toBeInTheDocument();
    });

    it('should handle empty steps array', () => {
      const { queryListItems } = setup({ steps: [] });

      expect(queryListItems()).toHaveLength(0);
    });

    it('should handle steps with long labels', () => {
      const longLabelSteps: Step[] = [
        {
          id: 1,
          label:
            'This is a very long step label that might need special handling',
          status: 'active',
        },
      ];

      const { getStepText } = setup({ steps: longLabelSteps });

      expect(
        getStepText(
          'This is a very long step label that might need special handling',
        ),
      ).toBeInTheDocument();
    });

    it('should handle numeric step ids', () => {
      const numericIdSteps: Step[] = [
        { id: 999, label: 'Numeric ID', status: 'active' },
      ];

      const { getStepText } = setup({ steps: numericIdSteps });

      expect(getStepText('Numeric ID')).toBeInTheDocument();
    });

    it('should handle string step ids', () => {
      const stringIdSteps: Step[] = [
        { id: 'uuid-abc-123', label: 'String ID', status: 'active' },
      ];

      const { getStepText } = setup({ steps: stringIdSteps });

      expect(getStepText('String ID')).toBeInTheDocument();
    });

    it('should handle all steps as completed', () => {
      const allCompletedSteps: Step[] = [
        { id: 1, label: 'Step 1', status: 'completed' },
        { id: 2, label: 'Step 2', status: 'completed' },
        { id: 3, label: 'Step 3', status: 'completed' },
      ];

      const { getStepByLabel } = setup({ steps: allCompletedSteps });

      expect(getStepByLabel(/step 1.*completed/i)).toBeInTheDocument();
      expect(getStepByLabel(/step 2.*completed/i)).toBeInTheDocument();
      expect(getStepByLabel(/step 3.*completed/i)).toBeInTheDocument();
    });

    it('should handle all steps as pending', () => {
      const allPendingSteps: Step[] = [
        { id: 1, label: 'Step 1', status: 'pending' },
        { id: 2, label: 'Step 2', status: 'pending' },
      ];

      const { getStepText } = setup({ steps: allPendingSteps });

      expect(getStepText('1')).toBeInTheDocument();
      expect(getStepText('2')).toBeInTheDocument();
    });

    it('should handle multiple error states', () => {
      const errorSteps: Step[] = [
        { id: 1, label: 'Error 1', status: 'error' },
        { id: 2, label: 'Error 2', status: 'error' },
      ];

      const { getStepByLabel } = setup({ steps: errorSteps });

      expect(getStepByLabel(/step 1.*error/i)).toBeInTheDocument();
      expect(getStepByLabel(/step 2.*error/i)).toBeInTheDocument();
    });
  });

  describe('Custom Styling', () => {
    it('should apply custom className to root element', () => {
      const { getNavigation } = setup({ className: 'my-custom-stepper' });

      expect(getNavigation()).toHaveClass('my-custom-stepper');
    });

    it('should merge classNames.root with base classes', () => {
      const { getNavigation } = setup({
        classNames: { root: 'extra-root-class' },
      });

      const nav = getNavigation();

      expect(nav).toHaveClass('extra-root-class');
      expect(nav).toHaveClass('flex');
    });

    it('should apply classNames.label to step labels', () => {
      const { getStepText } = setup({
        classNames: { label: 'custom-label-style' },
      });

      expect(getStepText('Select platform')).toHaveClass('custom-label-style');
    });
  });
});
