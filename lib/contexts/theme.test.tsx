import { FC, PropsWithChildren, ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '../components';

import { ThemeContextProps, ThemeProvider } from './theme.provider';
import { useTheme } from './theme.hook';

describe('ThemeContext', () => {
  const defaultTheme: ThemeContextProps['theme'] = 'kubefirst';

  const setup = ({
    theme,
    children: childrenProp,
  }: {
    theme?: ThemeContextProps['theme'];
    children?: ReactNode;
  } = {}) => {
    const wrapper: FC<PropsWithChildren> = ({ children }) => (
      <ThemeProvider theme={defaultTheme ?? theme}>{children}</ThemeProvider>
    );

    render(childrenProp ?? <Button>Click Me!</Button>, { wrapper });

    const user = userEvent.setup();

    return {
      user,
    };
  };

  it('should render correctly', async () => {
    setup();

    const button = await screen.findByRole('button');

    expect(button).toBeInTheDocument();
  });

  it('should has the current theme to kubefirst', async () => {
    const WrapperButton: FC = () => {
      const { theme } = useTheme();

      return <h2>{theme}</h2>;
    };

    setup({ theme: 'kubefirst', children: <WrapperButton /> });

    const currentTheme = await screen.findByRole('heading', {
      name: /kubefirst/i,
    });

    expect(currentTheme).toBeInTheDocument();
  });

  it('should change the current theme to colony', async () => {
    const WrapperButton: FC = () => {
      const { theme, setTheme } = useTheme();
      const handleClick = () => setTheme?.('colony');

      return (
        <>
          <h2>{theme}</h2>
          <Button onClick={handleClick}>Click Me!</Button>
        </>
      );
    };

    const { user } = setup({ theme: 'kubefirst', children: <WrapperButton /> });

    const button = await screen.findByRole('button');

    await user.click(button);

    const currentTheme = await screen.findByRole('heading', {
      name: /colony/i,
    });

    expect(currentTheme).toBeInTheDocument();
  });

  it('should change the current theme to konstruct', async () => {
    const WrapperButton: FC = () => {
      const { theme, setTheme } = useTheme();
      const handleClick = () => setTheme?.('konstruct');

      return (
        <>
          <h2>{theme}</h2>
          <Button onClick={handleClick}>Click Me!</Button>
        </>
      );
    };

    const { user } = setup({ theme: 'kubefirst', children: <WrapperButton /> });

    const button = await screen.findByRole('button');

    await user.click(button);

    const currentTheme = await screen.findByRole('heading', {
      name: /konstruct/i,
    });

    expect(currentTheme).toBeInTheDocument();
  });

  it('should throw an error because the context is not defined', async () => {
    const consoleSpy = vitest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    const Wrapper: FC = () => {
      const { setTheme } = useTheme();
      setTheme?.('colony');
      return <div>Test</div>;
    };

    expect(() => render(<Wrapper />)).toThrow(
      'setTheme function must be overridden',
    );

    consoleSpy.mockRestore();
  });
});
