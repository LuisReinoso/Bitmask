# Bitmask
Codifica datos en unos cuantos digitos!

# Instalacion

```bash
npm install --save LuisReinoso/Bitmask
```

# Uso
```typescript
import Bitmask from 'bitmask';

// Datos
const datos = ['ciudad', 'pais'];

let bitmask = new Bitmask(datos);
console.log(bitmask.valores); // ['ciudad', 'pais']
console.log(bitmask.mascaras); // {1:'ciudad', 2:'pais'}
```

# Creditos
Basado en [digit-cloak
](https://github.com/SamStonehouse/digit-cloak)