# 🦇 Bat Signal

Aplicativo React Native/Expo inspirado no "Desafio do Bat Sinal" da DIO.

## 📱 Sobre o Projeto

O Bat Signal é um app simples com duas telas principais:

- **Tela 1:** Exibe o logo do Batman e um botão "ACTIVATE BAT SIGNAL". Ao clicar, o logo e o botão somem e aparece um formulário.
- **Tela 2:** Formulário para preencher nome, telefone, localização e observação. Ao enviar, exibe um alerta de sucesso.

## 🚀 Como rodar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/evelynnnie/bat-signal.git
   cd bat-signal
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o app**
   ```bash
   npm start
   ```
   Ou use:
   - `npm run android` para rodar no Android
   - `npm run ios` para rodar no iOS
   - `npm run web` para rodar no navegador

4. **Abra no seu dispositivo**
   - Use o app [Expo Go](https://expo.dev/client) para escanear o QR Code exibido no terminal.

## 🗂️ Estrutura de Pastas

```
src/
  components/
    BatButton/
    BatForm/
    BatLogo/
  screens/
    Home/
  index.d.ts
assets/
  bat-logo.svg
App.tsx
index.ts
```

## 🛠️ Tecnologias utilizadas

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## ✨ Funcionalidades

- Alternância entre logo/botão e formulário
- Formulário com campos: nome, telefone, localização e observação
- Alerta ao enviar o formulário

## 📄 Licença

MIT © Daiane Araújo

---

Projeto desenvolvido para o desafio da DIO 🚨🦇