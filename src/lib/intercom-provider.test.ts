import {render} from '@testing-library/svelte/svelte5';
import IntercomProvider from './intercom-provider.test.svelte';

describe('IntercomProvider', () => {
  it('renders children', async () => {
    const {findByText, debug} = render(IntercomProvider);

    debug();

    expect(await findByText('Hello, World!')).toBeInTheDocument();
  });
});
