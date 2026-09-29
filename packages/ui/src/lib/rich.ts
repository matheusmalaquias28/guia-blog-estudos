/**
 * Converte marcação mínima da copy em HTML seguro:
 *   *texto*  -> <mark>texto</mark>  (destaque de cor)
 *   **texto** -> <strong>texto</strong>
 *   __texto__ -> <span class="u">texto</span>  (sublinhado verde)
 * Todo o resto é escapado.
 */
export function rich(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/__(.+?)__/g, '<span class="u">$1</span>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<mark>$1</mark>');
}
