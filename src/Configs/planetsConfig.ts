type TPlanet = {
    [id: string]:{
        path: string,
        color: number,
        lightColor?: any,
    }
}

export type planetArgs = 'earth'|'jupiter'|'mars'|'uranus'|'neptune'|'mercury'|'venus'

export const planets: TPlanet = {
    'earth': {
        path: 'earth.jpeg',
        color: 0xabc7e8,
    },
    'jupiter': {
        path: 'jupiter.png',
        color: 0xffbbaa
    },
    'mars': {
        path: 'mars.jpeg',
        color: 0x7e2122,
    },
    'uranus': {
        path: 'uranus.jpeg',
        color: 0xbbbbff
    },
    'neptune': {
        path: 'neptune.jpeg',
        color: 0x8899ff
    },
    'mercury': {
        path: 'mercury.png',
        color: 0xaaaaaa
    },
    'venus': {
        path: 'venus.png',
        color: 0xffa500
    }
}