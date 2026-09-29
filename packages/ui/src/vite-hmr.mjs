/**
 * Plugin de dev: garante que mudanças em packages/ui apareçam na hora.
 *
 * O Vite às vezes mantém em cache o CSS de componentes .astro que ficam fora da pasta
 * da LP (caso do @lp/ui no monorepo): o HTML atualiza, mas o estilo não. Aqui, qualquer
 * alteração em packages/ui invalida todos os módulos derivados daquele arquivo
 * (inclusive os ?astro&type=style) e recarrega a página inteira.
 */
export function lpUiHmr() {
  const norm = (p) => p.replace(/\\/g, '/');

  return {
    name: 'lp-ui-hmr',
    apply: 'serve',
    enforce: 'post',
    hotUpdate({ file }) {
      const changed = norm(file);
      if (!changed.includes('/packages/ui/')) return;

      const graph = this.environment.moduleGraph;
      for (const [id, mod] of graph.idToModuleMap) {
        if (norm(id).startsWith(changed)) graph.invalidateModule(mod);
      }

      if (this.environment.name === 'client') {
        this.environment.hot.send({ type: 'full-reload' });
      }
      return [];
    },
  };
}
