

## Plano: Aumentar Tamanho dos Logos de Clientes

### Alterações Necessárias

**Arquivo:** `src/components/home/PartnersSection.tsx`

Vou aumentar tanto o container dos logos quanto a altura máxima das imagens:

| Elemento | Valor Atual | Novo Valor |
|----------|-------------|------------|
| Container (card) | `h-28` (112px) | `h-36` (144px) |
| Imagem logo | `max-h-16` (64px) | `max-h-24` (96px) |
| Padding | `p-6` | `p-8` |

### Código a ser alterado

**Linha 51** - Aumentar altura do card:
```tsx
// De:
<div className="bg-card rounded-lg p-6 flex items-center justify-center h-28 card-hover border border-border mx-2">

// Para:
<div className="bg-card rounded-lg p-8 flex items-center justify-center h-36 card-hover border border-border mx-2">
```

**Linha 55** - Aumentar tamanho máximo do logo:
```tsx
// De:
className="max-h-16 w-auto object-contain"

// Para:
className="max-h-24 w-auto object-contain"
```

### Resultado Esperado

- Cards de logos 28% mais altos (de 112px para 144px)
- Logos 50% maiores (de 64px para 96px de altura máxima)
- Mais espaço interno nos cards para melhor respiro visual
- Mantém responsividade e estilo visual atual

