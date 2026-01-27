
## Plano: Carrossel de Logos de Clientes

### Objetivo
Transformar a seção "Conheça alguns clientes da Meddiar Logística" de um grid estático para um carrossel dinâmico com as logos reais dos parceiros.

---

### 1. Copiar Logos para o Projeto

As seguintes imagens serão copiadas para `src/assets/partners/`:

| Arquivo Original | Destino |
|------------------|---------|
| Andre_Guimaraes.png | src/assets/partners/andre-guimaraes.png |
| DRYWALL_CENTER.avif | src/assets/partners/drywall-center.avif |
| GDSUL.png | src/assets/partners/gdsul.png |
| RCERVELLINI.jpeg | src/assets/partners/rcervellini.jpeg |
| CONSTRUCENTER.jpeg | src/assets/partners/construcenter.jpeg |

---

### 2. Modificar PartnersSection.tsx

**Arquivo:** `src/components/home/PartnersSection.tsx`

#### Alteracoes principais:

1. **Importar componentes do carrossel:**
```tsx
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
```

2. **Importar as logos:**
```tsx
import logoAndreGuimaraes from "@/assets/partners/andre-guimaraes.png";
import logoDrywallCenter from "@/assets/partners/drywall-center.avif";
import logoGdsul from "@/assets/partners/gdsul.png";
import logoRcervellini from "@/assets/partners/rcervellini.jpeg";
import logoConstrucenter from "@/assets/partners/construcenter.jpeg";
```

3. **Atualizar array de parceiros com logos reais:**
```tsx
const partners = [
  { name: "Grupo André Guimarães", logo: logoAndreGuimaraes },
  { name: "Drywall Center", logo: logoDrywallCenter },
  { name: "GDSUL", logo: logoGdsul },
  { name: "RCervellini", logo: logoRcervellini },
  { name: "Construcenter", logo: logoConstrucenter },
];
```

4. **Substituir grid por carrossel:**
```tsx
<div className="relative px-12">
  <Carousel
    opts={{
      align: "start",
      loop: true,
    }}
    className="w-full"
  >
    <CarouselContent>
      {partners.map((partner, index) => (
        <CarouselItem 
          key={index} 
          className="basis-1/2 md:basis-1/3 lg:basis-1/5"
        >
          <div className="bg-card rounded-lg p-6 flex items-center justify-center h-28 card-hover border border-border mx-2">
            <img
              src={partner.logo}
              alt={partner.name}
              className="max-h-16 w-auto object-contain"
            />
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious className="left-0" />
    <CarouselNext className="right-0" />
  </Carousel>
</div>
```

---

### 3. Configuracao do Carrossel

| Propriedade | Valor | Descricao |
|-------------|-------|-----------|
| align | "start" | Alinha itens ao inicio |
| loop | true | Carrossel infinito |
| basis-1/2 | Mobile | 2 logos por vez |
| basis-1/3 | Tablet | 3 logos por vez |
| basis-1/5 | Desktop | 5 logos por vez |

---

### 4. Arquivos a Serem Modificados/Criados

| Acao | Arquivo |
|------|---------|
| Criar pasta | src/assets/partners/ |
| Copiar | 5 logos para src/assets/partners/ |
| Modificar | src/components/home/PartnersSection.tsx |

---

### 5. Resultado Esperado

- Carrossel horizontal com as 5 logos reais dos clientes
- Navegacao com setas laterais
- Responsivo (2 logos mobile, 3 tablet, 5 desktop)
- Loop infinito para navegacao continua
- Transicao suave entre slides
- Mantém o estilo visual atual (cards brancos com borda)
