import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DetailedCard from './DetailedCard';

describe('DetailedCard Component', () => {
  const testProps = {
    name: 'United States',
    emoji: '🇺🇸',
    native: 'USA',
    currency: 'USD',
  };

  test('renders the component without errors', () => {
    render(<DetailedCard {...testProps} />);

    expect(screen.getByText('United States')).toBeInTheDocument();
    expect(screen.getByText('🇺🇸')).toBeInTheDocument();
    expect(screen.getByText('Native:')).toBeInTheDocument();
    expect(screen.getByText('Currency:')).toBeInTheDocument();
  });

  test('displays the correct name and emoji', () => {
    render(<DetailedCard {...testProps} />);

    expect(screen.getByText(testProps.name)).toBeInTheDocument();
    expect(screen.getByText(testProps.emoji)).toBeInTheDocument();
  });

  test('displays the correct native and currency values', () => {
    render(<DetailedCard {...testProps} />);

    expect(screen.getByText(testProps.native)).toBeInTheDocument();
    expect(screen.getByText(testProps.currency)).toBeInTheDocument();
  });
});
