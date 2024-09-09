import {describe} from 'node:test';
import {expect, test, vi} from 'vitest';
import * as core from './core';

const mocks = vi.hoisted(() => {
  return {
    Intercom: vi.fn(),
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
  };
});

vi.mock('@intercom/messenger-js-sdk', async () => {
  const mod = await vi.importActual<
    typeof import('@intercom/messenger-js-sdk')
  >('@intercom/messenger-js-sdk');

  return {
    ...mod,
    ...mocks,
  };
});

describe('core', () => {
  test('init', () => {
    core.init({
      appId: '123',
      region: 'ap',
      actionColor: 'white',
      backgroundColor: 'gray',
    });

    expect(mocks.Intercom).toHaveBeenCalledWith({
      app_id: '123',
      region: 'ap',
      action_color: 'white',
      background_color: 'gray',
    });
  });

  test('boot', () => {
    core.boot({
      appId: '123',
      actionColor: 'white',
      backgroundColor: 'gray',
    });

    expect(mocks.boot).toHaveBeenCalledWith({
      app_id: '123',
      action_color: 'white',
      background_color: 'gray',
    });
  });

  test('update', () => {
    core.update({
      name: 'John Doe',
      email: 'johndoe@dummy.bla',
      userId: '123',
      customPropKey: 'customPropValue',
    });

    expect(mocks.update).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'johndoe@dummy.bla',
      user_id: '123',
      custom_prop_key: 'customPropValue',
    });
  });

  test('getVisitorId', () => {
    core.getVisitorId();
    expect(mocks.getVisitorId).toHaveBeenCalled();
  });

  test('hide', () => {
    core.hide();
    expect(mocks.hide).toHaveBeenCalled();
  });

  test('show', () => {
    core.show();
    expect(mocks.show).toHaveBeenCalled();
  });

  test('showArticle', () => {
    core.showArticle('123');
    expect(mocks.showArticle).toHaveBeenCalledWith('123');
  });

  test('showConversation', () => {
    core.showConversation('123');
    expect(mocks.showConversation).toHaveBeenCalledWith('123');
  });

  test('showMessages', () => {
    core.showMessages();
    expect(mocks.showMessages).toHaveBeenCalled();
  });

  test('showNewMessage', () => {
    core.showNewMessage('Hello');
    expect(mocks.showNewMessage).toHaveBeenCalledWith('Hello');
  });

  test('showNews', () => {
    core.showNews('123');
    expect(mocks.showNews).toHaveBeenCalledWith('123');
  });

  test('showSpace', () => {
    core.showSpace('help');
    expect(mocks.showSpace).toHaveBeenCalledWith('help');
  });

  test('showTicket', () => {
    core.showTicket('123');
    expect(mocks.showTicket).toHaveBeenCalledWith('123');
  });

  test('shutdown', () => {
    core.shutdown();
    expect(mocks.shutdown).toHaveBeenCalled();
  });
});
