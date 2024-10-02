import {render, screen} from '@testing-library/svelte/svelte5';
import {userEvent} from '@testing-library/user-event';
import IntercomProvider from './intercom-provider.test.svelte';

const core: Record<string, () => void> = vi.hoisted(() => ({
  init: vi.fn(),
  boot: vi.fn(),
  update: vi.fn(),
  getVisitorId: vi.fn(),
  hide: vi.fn(),
  show: vi.fn(),
  showArticle: vi.fn(),
  showConversation: vi.fn(),
  showMessages: vi.fn(),
  showNewMessage: vi.fn(),
  showNews: vi.fn(),
  showSpace: vi.fn(),
  showTicket: vi.fn(),
  shutdown: vi.fn(),
  startChecklist: vi.fn(),
  startSurvey: vi.fn(),
  startTour: vi.fn(),
  trackEvent: vi.fn(),
  onHide: vi.fn(),
  onShow: vi.fn(),
  onUnreadCountChange: vi.fn(),
  onUserEmailSupplied: vi.fn(),
}));

vi.mock('./core', () => ({...core}));

const methods = [
  'update',
  'getVisitorId',
  'hide',
  'show',
  'showArticle',
  'showConversation',
  'showMessages',
  'showNewMessage',
  'showNews',
  'showSpace',
  'showTicket',
  'shutdown',
  'startChecklist',
  'startSurvey',
  'startTour',
  'trackEvent',
];

describe('IntercomProvider', () => {
  beforeEach(() => {
    render(IntercomProvider);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it.each(methods)('%s', async (method) => {
    const {click} = userEvent.setup();
    const trigger = screen.getByRole('button', {name: method});
    await click(trigger);
    expect(core[method]).toHaveBeenCalledTimes(1);
  });
});
