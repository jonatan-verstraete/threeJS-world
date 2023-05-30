# About
A small React Three Fiber portfolio app using Rapier physics. <br>
If you are new to React see [getting-started](DEVELOPMENT.md)

<br>

# A minimal, chronological explenation of the "room mechanism"

Lets take a look at each of the following files
```bash
src
├── App
├── Components
│   └── RoomItems
│        └── Floor.tsx
├── Configs
│   └── roomConfig.tsq
├── Layouts
│    └── LayoutFp.tsx
├── routs
│    └── NavigationRooms.tsx
...
└── Pages
   └── RoomSpace
      │   ├── Components
      │   │   └── CustomSpaceBallz.tsx
      │   └── index.tsx
      └── Rooms.tsx
x
```

## App 
[index.tsx](src/App/index.tsx)<br>
The parent of the app is routing, so we can use *useLocation* later on in the story.

## routs 
[NavigationRooms.tsx](src/routs/NavigationRooms.tsx).<br>
Apart from working like a normal router, it's routes are provided by **roomConfig**.


## roomConfig 
[roomConfig.ts](src/Configs/roomConfig.ts) is rather brain of the mechanism. Here we can define configuration that can be passed on to all child components.<br>
**ROOM_CONFIG** has **3** items:
- `ROOM_ID`: all id's of the room. These will also be used as url in the router.
   *Why use as url?*
   Because it will determin which configuration to load.

- `DefaultRoom`: All default values that a room can have. Also used as example.

- `ROOMS`: Contains each room custom configuration. A room does not require this
         But a room does require a single door if you use it (otherwise it's rather a prison).


## Rooms 
[Rooms.tsx](src/Pages/Rooms.tsx) is the hearth of the app. But instead of pumping blood it pumps objects thoughout all of its veins.<br>
It provides a structure where every component, even the **Player and Layout** can be preconfigured by *roomConfig*.

```ts

   // By using the url to provide the page config, we can update it's value before the page is rendered by the router,
   // as the the router is a child of this <roomConfigContext>.
   // The layout (rendering the player) can now also change based on the given RoomConfig
   config.current = ROOM_CONFIG.ROOMS[location.pathname]

   return (
      // provide all configuration to whole app
      <roomConfigContext.Provider value={config.current}>
         // layout (includes player, which both also have a provider!)
         <Layout >
            // routing and pages/rooms
            <RoomsRouting />
         </Layout>
      </roomConfigContext.Provider>
   )
};

```

## Layout
[Layout.tsx](src/Layouts/LayoutFp.tsx) contains the actual Canvas, Physics, KeyboardControls... etc. 

The layout also has a `GlobalContextProvider` which provides the option to eg. change gravity during gameplay.

It also contains the the Player, which has **2** types:
   - fixed: Fixed position (currently only used in RoomSpace)
   - dynamic: normal movement
  
The player also provides configuration which can be altered at any time.



## A Room
exmaple: [Home](src/Pages/Home/index.tsx).

A page does not need to be a room. The basic setup of a is the following:

```tsx
   // basic lighting
   <RoomLighting/>
   // creates walls and doors
   <RoomSetup />

```
Apart from that a room is just a scene. But in RoomConfig you can still alter basically everything to your needs.

A RoomHome page has also a Components folder, containing components, exclusively for this scene.





# Creating a new room
Creating a room required 3 simple steps in order to use the mechanism.

1. create folder [Pages/](Pages)**\<RoomName\>** with an **index.tsx**, containing your scene
   

2. Add 2 things in [roomConfig](src/Configs/roomConfig.ts): 
   1. add a unique ID to `ROOM_ID`
   2. add this ID to `ROOMS`. Make sure to add `constructRoom` function and `id`. You can enter custom configuration in there. 
   - *if you did not add any of these you will have the default room configuration*.
  
3. add the route, which is the ROOM_ID and import to [rooms-routing](src/routs/NavigationRooms.tsx).

DONE!# threeJS-world
# threeJS-world
