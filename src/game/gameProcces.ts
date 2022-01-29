import { number } from 'prop-types'

enum baseStats {
  'intelligence' = 'intelligence',
  'strength' = 'strength',
  'dexterety' = 'dexterety',
  'mana' = 'mana',
  'health' = 'health',
}
function findModifier(modifierName: string, modifierObj: any) {
  return modifierObj.map((e: any) => e[modifierName] || 1)[0]
}
class Stats {
  health: number
  mana: number
  lvl: number
  intelligence: number
  strength: number
  dexterety: number
  constructor(lvl = 1, modifierRace: any, modifierClass: any, buff = 1) {
    this.lvl = lvl
    this.intelligence =
      getRndNumber(this.lvl) *
      (findModifier('intelligence', modifierRace) *
        findModifier('intelligence', modifierClass)) *
      buff
    this.strength =
      getRndNumber(this.lvl) *
      (findModifier('strength', modifierRace) *
        findModifier('strength', modifierClass)) *
      buff
    this.dexterety =
      getRndNumber(this.lvl) *
      (findModifier('dexterety', modifierRace) *
        findModifier('dexterety', modifierClass)) *
      buff
    this.health =
      this.strength *
      (findModifier('health', modifierRace) *
        findModifier('health', modifierClass)) *
      buff
    this.mana =
      this.intelligence *
      (findModifier('mana', modifierRace) *
        findModifier('mana', modifierClass)) *
      buff
  }
}
function getRndNumber(max: number, min: number = 0): number {
  return Math.round(min + Math.random() * (max - min))
}
const WeaponType: iWeaponType[] = [
  {
    Type: 'Hard',
    weaponList: [
      {
        typeWeapon: 'sword',
        modifier: {
          speed: 0.6,
          cutting: 1.3,
          crushing: 0,
          Pricking: 1,
          magic: 0,
        },
      },
      {
        typeWeapon: 'lance',
        modifier: {
          speed: 0.4,
          cutting: 0,
          crushing: 1.2,
          Pricking: 3,
          magic: 0,
        },
      },
      {
        typeWeapon: 'mace',
        modifier: {
          speed: 0.2,
          cutting: 0,
          crushing: 8,
          Pricking: 0,
          magic: 0,
        },
      },
    ],
  },
  {
    Type: 'Medium',
    weaponList: [
      {
        typeWeapon: 'sword',
        modifier: {
          speed: 0.8,
          cutting: 1.1,
          crushing: 0,
          Pricking: 1,
          magic: 0,
        },
      },
      {
        typeWeapon: 'lance',
        modifier: {
          speed: 0.4,
          cutting: 0,
          crushing: 1.1,
          Pricking: 3,
          magic: 0,
        },
      },
      {
        typeWeapon: 'mace',
        modifier: {
          speed: 0.6,
          cutting: 0,
          crushing: 4,
          Pricking: 0,
          magic: 0,
        },
      },
      {
        typeWeapon: 'crossbow',
        modifier: {
          speed: 0.2,
          cutting: 0,
          crushing: 0,
          Pricking: 8,
          magic: 0,
        },
      },
    ],
  },
  {
    Type: 'Soft',
    weaponList: [
      {
        typeWeapon: 'sword',
        modifier: { speed: 1, cutting: 1, crushing: 0, Pricking: 1, magic: 0 },
      },
      {
        typeWeapon: 'bow',
        modifier: {
          speed: 0.8,
          cutting: 0,
          crushing: 0,
          Pricking: 2,
          magic: 0,
        },
      },
      {
        typeWeapon: 'knife',
        modifier: {
          speed: 2,
          cutting: 0.8,
          crushing: 0,
          Pricking: 0.8,
          magic: 0,
        },
      },
      {
        typeWeapon: 'staff',
        modifier: {
          speed: 1,
          cutting: 0,
          crushing: 0.2,
          Pricking: 0,
          magic: 10,
        },
      },
    ],
  },
]
interface iWeaponType {
  Type: string
  weaponList: {
    typeWeapon: string
    modifier: {
      speed: number
      cutting: number
      crushing: number
      Pricking: number
      magic: number
    }
  }[]
}
const ArmorType = [
  {
    Type: 'Soft',
    armorList: [
      {
        typeArmor: 'leather',
        modifier: { speed: 1, cutting: 5, crushing: 0, Pricking: 5, magic: 0 },
      },
    ],
  },
  {
    Type: 'Medium',
    armorList: [
      {
        typeArmor: 'leather',
        modifier: { speed: 1, cutting: 8, crushing: 0, Pricking: 8, magic: 2 },
      },
      {
        typeArmor: 'metalic',
        modifier: {
          speed: 1,
          cutting: 2,
          crushing: 1.1,
          Pricking: 2,
          magic: 0,
        },
      },
    ],
  },
  {
    Type: 'Hard',
    armorList: [
      {
        typeArmor: 'metalic',
        modifier: {
          speed: 1,
          cutting: 3,
          crushing: 1.2,
          Pricking: 3,
          magic: 0,
        },
      },
    ],
  },
]
enum Damge$Defence_Type {
  'Cutting',
  'Crushing',
  'Pricking',
}
interface WeaponStat {
  damageType: Damge$Defence_Type
  damage: number
}
const PClass = [
  {
    pClass: 'Paladin',
    modifier: [
      {
        strength: 1.2,
        dexterety: 1.1,
        health: 1.3,
        mana: 1.1,
      },
      [
        {
          typeWeapon: 'Medium',
          weaponList: [
            { typeWeapon: 'mace', crushing: 2 },
            { typeWeapon: 'lance', Pricking: 2 },
            { typeWeapon: 'sword', cutting: 2 },
          ],
        },
        {
          typeWeapon: 'Hard',
          weaponList: [{ typeWeapon: 'mace', crushing: 3 }],
        },
      ],
      [
        {
          typeArmor: 'Medium',
          armorList: [
            {
              typeArmor: 'metalic',
              crushing: 4,
              magic: 4,
            },
          ],
        },
      ],
    ],
  },
  {
    pClass: 'Knight',
    modifier: [
      { strength: 1.6, health: 1.6 },
      [
        {
          typeWeapon: 'Medium',
          weaponList: [
            { typeWeapon: 'mace', crushing: 2 },
            { typeWeapon: 'lance', Pricking: 2 },
            { typeWeapon: 'sword', cutting: 2 },
          ],
        },
        {
          typeWeapon: 'Hard',
          weaponList: [
            { typeWeapon: 'mace', crushing: 4 },
            { typeWeapon: 'lance', Pricking: 4 },
            { typeWeapon: 'sword', cutting: 5 },
          ],
        },
      ],
      [
        {
          Type: 'Hard',
          armorList: [
            {
              typeArmor: 'metalic',
              cutting: 5,
              crushing: 5,
            },
          ],
        },
      ],
    ],
  },
  {
    pClass: 'Archer',
    modifier: [
      {
        dexterety: 1.75,
        health: 0.8,
        strength: 0.8,
      },
      [
        {
          typeWeapon: 'Medium',
          weaponList: [{ typeWeapon: 'crossbow', Pricking: 12, speed: 10 }],
        },
        {
          typeWeapon: 'Soft',
          weaponList: [{ typeWeapon: 'bow', Pricking: 8, speed: 20 }],
        },
      ],
      [
        {
          typeArmor: 'Soft',
          armorList: [
            {
              typeArmor: 'leather',
              Pricking: 3,
            },
          ],
        },
      ],
    ],
  },
  {
    pClass: 'Assasin',
    modifier: [
      {
        dexterety: 2,
        health: 0.8,
        strength: 0.8,
      },
      [
        {
          typeWeapon: 'Soft',
          weaponList: [
            { typeWeapon: 'knife', Pricking: 12, cutting: 12, speed: 20 },
            { typeWeapon: 'sword', Pricking: 8, cutting: 8, speed: 10 },
          ],
        },
      ],
      [
        {
          Type: 'Soft',
          armorList: [
            {
              typeArmor: 'leather',
              Pricking: 3,
              magic: 3,
            },
          ],
        },
      ],
    ],
  },
  {
    pClass: 'Mage',
    modifier: [
      {
        intelligence: 20,
        mana: 3,
        health: 0.6,
        strength: 0.2,
      },
      [
        {
          typeWeapon: 'Soft',
          weaponList: [{ typeWeapon: 'staff', magic: 40 }],
        },
      ],
      [
        {
          Type: 'Soft',
          armorList: [
            {
              typeArmor: 'leather',
              cutting: 5,
              crushing: 5,
              Pricking: 5,
              magic: 5,
            },
          ],
        },
      ],
    ],
  },
]
function smthWeapon(preferredWeapon: any, buff = 1) {
  const bufferNumber = getRndNumber(
    preferredWeapon.reduce(function (acc: number, e: any) {
      return acc + e.weaponList.length
    }, 0),
    1
  )
  return preferredWeapon.reduce(function (acc: any, e: any) {
    if (acc + e.weaponList.length >= bufferNumber) {
      const weaponObj = e.weaponList[bufferNumber - acc - 1]
      let damage = 0
      switch (e.typeWeapon) {
        case 'Soft':
          damage = getRndNumber(10, 30) * buff
          break
        case 'Medium':
          damage = getRndNumber(30, 60) * buff
          break
        case 'Hard':
          damage = getRndNumber(60, 90) * buff
          break
        default:
          break
      }
      let specifiedDamage: any = { modifier: {} }
      const smth: any = WeaponType.find(
        (weapon) => weapon.Type === e.typeWeapon
      )?.weaponList.find((weapon) => weapon.typeWeapon === weaponObj.typeWeapon)
      for (const keys in smth.modifier) {
        specifiedDamage.modifier = {
          ...specifiedDamage.modifier,
          [keys]: (Number(weaponObj[keys]) || 1) * smth.modifier[keys],
        }
      }
      for (const key in specifiedDamage.modifier) {
        if (key === 'speed') continue
        if (specifiedDamage.modifier[key] * damage > 0) {
          specifiedDamage = {
            ...specifiedDamage,
            [key + 'Damage']: specifiedDamage.modifier[key] * damage,
          }
        }
      }
      return {
        ...e,
        weaponList: {
          ...specifiedDamage,
          weaponType: weaponObj.typeWeapon,
          damage,
        },
      }
    }
    if (typeof acc !== 'number') return acc
    return acc + e.weaponList.length
  }, 0)
}
function smthArmor(preferredWeapon: any, buff = 1) {
  const bufferNumber = getRndNumber(
    preferredWeapon.reduce(function (acc: any, e: any) {
      return acc + e.armorList.length
    }, 0),
    1
  )
  return preferredWeapon.reduce(function (acc: any, e: any) {
    if (acc + e.armorList.length >= bufferNumber) {
      let armorObj = e.armorList[bufferNumber - acc - 1]
      let armor = 0
      switch (e.Type) {
        case 'Soft':
          armor = getRndNumber(0, 5) * buff
          break
        case 'Medium':
          armor = getRndNumber(5, 10) * buff
          break
        case 'Hard':
          armor = getRndNumber(10, 15) * buff
          break
        default:
          break
      }
      let specifiedDamage: any = { modifier: {} }
      const smth: any = ArmorType.find(
        (armor) => armor.Type === e.Type
      )?.armorList.find((armor) => armor.typeArmor === armorObj.typeArmor)
      for (const keys in smth.modifier) {
        specifiedDamage.modifier = {
          ...specifiedDamage.modifier,
          [keys]: (Number(armorObj[keys]) || 1) * smth.modifier[keys],
        }
      }
      for (const key in specifiedDamage.modifier) {
        if (key === 'speed') continue
        if (specifiedDamage.modifier[key] * armor > 0) {
          specifiedDamage = {
            ...specifiedDamage,
            [key + 'Defence']: specifiedDamage.modifier[key] * armor,
          }
        }
      }
      return {
        Type: e.Type,
        armorList: {
          ...specifiedDamage,
          armorType: armorObj.typeArmor,
          armor,
        },
      }
    }
    if (typeof acc !== 'number') return acc
    return acc + e.armorList.length
  }, 0)
}
interface Races {
  race: string
  modifier: {}[]
}
interface Classes {
  pClass: string
  modifier: {}[]
}
const pRace = [
  {
    race: 'Human',
    modifier: [
      {
        intelligence: 1.45,
        dexterety: 1.2,
      },
    ],
  },
  {
    race: 'Goblin',
    modifier: [{ health: 1.05, intelligence: 0.2 }],
  },
  {
    race: 'Death',
    modifier: [{ mana: 2, strength: 0.4, health: 0.4 }],
  },
  {
    race: 'Beast',
    modifier: [
      {
        strength: 1.45,
        intelligence: 0.3,
      },
    ],
  },
]
abstract class Person {
  pStats: Stats
  pRace: Races
  pClass: Classes
  pWeapon: object
  pArmor: object
  constructor(lvl: number, buff: number = 1) {
    this.pRace = pRace[Math.round(Math.random() * 4)]
    this.pClass = PClass[Math.round(Math.random() * 5)]
    this.pStats = new Stats(
      lvl,
      this.pRace.modifier,
      this.pClass.modifier,
      buff
    )
    this.pWeapon = smthWeapon(this.pClass.modifier[1], buff)
    this.pArmor = smthArmor(this.pClass.modifier[2], buff)
  }
}
class User extends Person {
  constructor(lvl: number, buff: number = 100) {
    super(lvl, buff)
  }
}
class Enemy extends Person {
  constructor(lvl: number) {
    super(lvl)
  }
}
const hero = new User(1)
function fight(person: User, enemy: Enemy[]) {
  const count = getEnemyCount(getRndNumber(4, 0))
  const arrayOfEnemy = []
  for (let index = 0; index < count; index++) {
    const enemy = new Enemy(hero.pStats.lvl)
    arrayOfEnemy.push(enemy)
  }
}
//function tsa(str: number, int: number, dex: number): Stats {
//  return {
//    health: str * 10,
//    mana: int * 10,
//    intelligence: int,
//    strength: str,
//    dexterety: dex,
//  }
//}
//class User extends Person {
//  constructor(
//    pRace: Race,
//    pClass: PClass,
//    pStats: Stats,
//    pWeapon: Weapon,
//    pArmor: Armor
//  ) {
//    super(pRace, pClass, pStats, pWeapon, pArmor)
//    this.pStats =
//  }
//}
//class Tsa {
//  pStats: Stats
//  constructor(str: number, int: number, dex: number) {
//    this.pStats = tsa(str, int, dex)
//  }
//}
//const taf = new Tsa(1, 1, 1)
//console.log(taf)
enum Dungeon {
  'Forest',
  'Cave',
  'RuinedFort',
  'Village',
  'Field',
}
function getEnemyCount(dungeon: Dungeon): number {
  switch (dungeon) {
    case Dungeon.Cave:
      return Math.round(Math.random() * 50)
    case Dungeon.Field:
      return Math.round(Math.random() * 100)
    case Dungeon.Forest:
      return Math.round(Math.random() * 6)
    case Dungeon.RuinedFort:
      return Math.round(Math.random() * 150)
    case Dungeon.Village:
      return Math.round(Math.random() * 15)
    default:
      return 1
  }
}
export function getEnemy(dungeon: Dungeon) {}
