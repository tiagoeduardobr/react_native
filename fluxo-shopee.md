# Fluxograma - Compra de produto na Shopee

> Arquivo pronto para abrir no VS Code com Mermaid.
> Recomendado usar a extensão Mermaid Preview ou Mermaid Viewer no VS Code.

```mermaid
flowchart TD
    A[Lucas clica em Finalizar Compra] --> B[Frontend envia dados do carrinho, endereço, frete e pagamento]
    B --> C[Servidor recebe a requisição]
    C --> D[Valida usuário e sessão]
    D --> E[Consulta carrinho e produtos]
    E --> F[Recalcula preços, frete, cupons e total]
    F --> G{Estoque suficiente?}

    G -- Não --> H[Exibe produto indisponível]
    G -- Sim --> I[Reserva o estoque]
    I --> J[Cria pedido com status pendente]
    J --> K[Processa o pagamento]
    K --> L{Pagamento aprovado?}

    L -- Não --> M[Libera a reserva de estoque]
    M --> N[Cancela o pedido]

    L -- Sim --> O[Confirma o pedido]
    O --> P[Atualiza o estoque definitivamente]
    P --> Q[Grava pagamento e pedido no banco]
    Q --> R[Mostra: Pedido realizado com sucesso]

    style A fill:#e3f2fd,stroke:#1565c0,stroke-width:2px,color:#0d1b2a
    style G fill:#fff3e0,stroke:#ef6c00,stroke-width:2px,color:#3e2723
    style L fill:#fff3e0,stroke:#ef6c00,stroke-width:2px,color:#3e2723
    style H fill:#ffebee,stroke:#c62828,stroke-width:2px,color:#4a1111
    style N fill:#ffebee,stroke:#c62828,stroke-width:2px,color:#4a1111
    style R fill:#e8f5e9,stroke:#2e7d32,stroke-width:2px,color:#102a13
```

## Como visualizar no VS Code

1. Instale uma extensão de Mermaid, como Mermaid Preview ou Mermaid Viewer.
2. Abra este arquivo `.md` no VS Code.
3. Use o preview do Markdown ou o preview da extensão para renderizar o fluxograma.
