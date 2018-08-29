import Polyglot from 'node-polyglot';

const _polyglot = new Polyglot();

export function updatePolyglot(locale, messages) {
  _polyglot.locale(locale);
  _polyglot.replace(messages);
}

export default _polyglot;