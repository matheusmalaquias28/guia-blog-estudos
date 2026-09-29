/**
 * Todas as imagens da LP em um só lugar.
 *
 * Para trocar um placeholder pela imagem real:
 *   1. Salve o arquivo em src/assets/ (PNG/JPG em alta; o build gera AVIF/WebP otimizados).
 *   2. Descomente/adicione o import e coloque a variável no campo `src`.
 *
 * Exemplo:
 *   import heroMockup from '../assets/hero-mockup.png';
 *   hero: { src: heroMockup, alt: '...' }
 */
import type { Img } from '@lp/ui/types';
import bonus1 from '../assets/bonus-1-capa.png';
import bonus2 from '../assets/bonus-2-capa.png';
import bonus3 from '../assets/bonus-3-capa.png';
import comparativo from '../assets/comparativo-antes-depois.png';
import heroGuia from '../assets/hero-guia-moto.png';
import ofertaBasica from '../assets/oferta-basica-guia.png';
import pgAnuncio from '../assets/pagina-anuncio-moto-vendedor.jpg';
import pgFaixas from '../assets/pagina-faixas-de-entrada.jpg';
import pgConfirmar from '../assets/pagina-onde-confirmar-dados.jpg';
import pgMecanico from '../assets/pagina-pedir-mecanico.jpg';
import pgQueda from '../assets/pagina-queda-desalinhamento.jpg';
import pgTresSaidas from '../assets/pagina-tres-saidas.jpg';

export const images = {
  hero: {
    src: heroGuia,
    alt: 'Guia Visual da Moto Usada com os bônus: Guia de Atenção aos Modelos, Comparativo por Faixa de Preço e Checklist Imprimível de Avaliação',
  },
  showcase: [
    { src: pgTresSaidas, alt: 'Página do guia: três saídas para a visita, avançar, avaliar ou parar' },
    { src: pgQueda, alt: 'Página do guia: queda e desalinhamento, onde os sinais aparecem' },
    { src: pgConfirmar, alt: 'Página do guia: onde confirmar dados que podem mudar' },
    { src: pgFaixas, alt: 'Página do guia: faixas de entrada, opções para pesquisar' },
    { src: pgMecanico, alt: 'Página do guia: o que pedir para o mecânico verificar' },
    { src: pgAnuncio, alt: 'Página do guia: anúncio, moto e vendedor contam a mesma história?' },
  ],
  comparison: {
    src: comparativo,
    alt: 'À esquerda, comprador confuso diante de uma moto com sinais de queda, desgaste e vazamento; à direita, comprador satisfeito com o Guia Visual da Moto Usada ao lado de uma moto em bom estado',
  },
  product: {
    src: heroGuia,
    alt: 'Guia Visual da Moto Usada e páginas do material, com os três bônus do plano completo',
  },
  planBasic: {
    src: ofertaBasica,
    alt: 'Guia Visual da Moto Usada com páginas do material',
  },
  bonus: [
    { src: bonus1, alt: 'Capa do Bônus 1: Guia de Atenção aos Modelos de Motos Usadas' },
    { src: bonus2, alt: 'Capa do Bônus 2: Comparativo de Motos Usadas por Faixa de Preço' },
    { src: bonus3, alt: 'Capa do Bônus 3: Checklist Imprimível de Avaliação' },
  ],
} satisfies Record<string, Img | Img[]>;
