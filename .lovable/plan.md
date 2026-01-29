

## Plano: Substituir as 3 Ultimas Logos de Clientes

### Objetivo
Substituir as logos editadas de GDSUL, RCervellini e Construcenter pelas novas versoes enviadas.

---

### 1. Logos Atuais vs Novas

| Posicao | Logo Atual | Nova Logo |
|---------|------------|-----------|
| 3 | gdsul.png | GDSUL_EDITADA.png |
| 4 | rcervellini.jpeg | RCERVELLINI_EDITADA.png |
| 5 | construcenter.jpeg | CONSTRUCENTER_EDITADA.png |

---

### 2. Copiar Novas Logos

As 3 novas imagens serao copiadas para `src/assets/partners/`:

| Arquivo Enviado | Destino |
|-----------------|---------|
| GDSUL_EDITADA.png | src/assets/partners/gdsul.png |
| RCERVELLINI_EDITADA.png | src/assets/partners/rcervellini.png |
| CONSTRUCENTER_EDITADA.png | src/assets/partners/construcenter.png |

---

### 3. Atualizar PartnersSection.tsx

**Arquivo:** `src/components/home/PartnersSection.tsx`

Atualizar os imports para usar os novos arquivos (mudanca de extensao):

```tsx
// De:
import logoGdsul from "@/assets/partners/gdsul.png";
import logoRcervellini from "@/assets/partners/rcervellini.jpeg";
import logoConstrucenter from "@/assets/partners/construcenter.jpeg";

// Para:
import logoGdsul from "@/assets/partners/gdsul.png";
import logoRcervellini from "@/assets/partners/rcervellini.png";
import logoConstrucenter from "@/assets/partners/construcenter.png";
```

---

### 4. Arquivos a Serem Modificados

| Acao | Arquivo |
|------|---------|
| Copiar/Substituir | src/assets/partners/gdsul.png |
| Copiar/Substituir | src/assets/partners/rcervellini.png |
| Copiar/Substituir | src/assets/partners/construcenter.png |
| Modificar | src/components/home/PartnersSection.tsx |

---

### 5. Resultado Esperado

- As 3 logos antigas serao substituidas pelas versoes editadas
- As novas logos aparecerao no carrossel de clientes
- Mantém todas as funcionalidades existentes (hover, navegacao, responsividade)

