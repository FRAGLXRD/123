# Durak Arena (Godot Desktop Prototype)

This folder contains a **desktop game prototype** in Godot (not web) for a Steam-oriented Durak game.

## Current scope
- 2D desktop scene (`Main.tscn`) with lobby controls.
- Up to 6 players.
- Bots on/off.
- Friend-invite toggle.
- Friends-only mode (disables bots).
- Ukrainian/English localization switch.

## Run
1. Open `godot/project.godot` in Godot 4.2+.
2. Press **F5** to run.

## Next steps toward production Steam game
- Replace prototype text output with real card-table rendering.
- Implement full Durak rules engine (attack/defense/throw-ins/round-end).
- Add online networking + lobby replication for up to 6 players.
- Integrate Steamworks (auth, friends, invites, lobbies, relay).
- Add bot AI and deterministic turn simulation.
