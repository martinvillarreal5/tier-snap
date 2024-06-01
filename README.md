# TierSnap

Welcome to TierSnap! This project is a web application built with Vite and React. It allows users to create and customize tier lists by dragging and dropping items into different tiers.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [TODOs](#todos)
- [License](#license)

## Features

- **Drag and Drop**: Easily drag and drop items into different tiers using DndKit.
- **Customizable Tiers**: Add, remove, and rename tiers to suit your needs.
- **Fast and Lightweight**: Built with Vite for a fast development experience and optimized performance.

## Technologies

- todo

## TODOs

Here are some planned features and improvements for TierSnap:

### Features

- [ ] Item actions
  - [x] Add item delete button
  - [x] Add item settings button
    - [x] With title input
    - [ ] With image input to put as item background
    - [ ] With color input
- [ ] Presets
  - [ ] Reset to preset button modal
  - [ ] Create custom presets
    - [ ] Create custom presets
- [ ] Row customization button modal
- [ ] Spotify Integration
- [ ] Create download tier image button

### Maybe

- [ ] Easter eggs
- [ ] Special effects options
- [ ] Create export/inport tier as json button

### Probably Never

- [ ] Accounts and database persistance
- [ ] Live sessions

## Bugs

Here are some known bugs

- ~~ Drag overlay not takig the same space as row when there is more than 1 row of items~~
- ~~ If only one row, with many items, it grows height when dragged~~
- ~~ Row title text doesnt wrap~~
- Cant drag row to end if it has many items.
- Create row input doesnt clear when creating row
- Weird crash when dragging item over rows with many items

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Thank you for using the TierSnap! I hope you find it useful and fun. Happy tier making!
