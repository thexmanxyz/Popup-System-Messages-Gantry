# Popup System Messages - Atom for Gantry
This project contains a Gantry Atom and is based on **Popup System Messages** written by [Mark Taylor](https://rockettheme.com/forum/gantry5-for-joomla/278683-popupmessages-atom-freebie-by-mrt?limitstart=0) but received a heavy rework and contains additional features as well as fixes. It alters the **System Messages Particle** default behaviour within the Gantry templating framework so that messages are displayed in a popup instead of showing them in the default container. Furthermore, **Popup System Messages** provides an easy, user friendly and GUI assisted configuration and integration. In the current revision the following CMSs are supported:
* Joomla
* Wordpress
* Grav

## Prerequisites
* CMS (Joomla, Wordpress, Grav)
* Gantry Templating Framework and Theme - **at least v5.4.24**

## Download
Choose the correct download for your target platform. The Joomla Plugin System is supported for all Gantry themes globally or locally for the templates Helium and Hydrogen. The latest Atom version is **v1.0.3**.
___
**Default Atom:**
[English](https://github.com/thexmanxyz/Popup-System-Messages-Gantry/releases/download/v1.0.3/psm.atom.only.EN.v1.0.3.zip) / [German](https://github.com/thexmanxyz/Popup-System-Messages-Gantry/releases/download/v1.0.3/psm.atom.only.DE.v1.0.3.zip)

**Legacy Atom - Gantry <5.3.2:**
[English](https://github.com/thexmanxyz/Popup-System-Messages-Gantry/releases/download/v1.0.3/psm.atom.only.legacy.EN.v1.0.3.zip) / [German](https://github.com/thexmanxyz/Popup-System-Messages-Gantry/releases/download/v1.0.3/psm.atom.only.legacy.DE.v1.0.3.zip)

**Joomla Plugin - All Templates (Global):**
[English](https://github.com/thexmanxyz/Popup-System-Messages-Gantry/releases/download/v1.0.3/psm.j3.global.EN.v1.0.3.zip) / [German](https://github.com/thexmanxyz/Popup-System-Messages-Gantry/releases/download/v1.0.3/psm.j3.global.DE.v1.0.3.zip)

**Joomla Plugin - Hydrogen:**
[English](https://github.com/thexmanxyz/Popup-System-Messages-Gantry/releases/download/v1.0.3/psm.j3.hydrogen.EN.v1.0.3.zip) / [German](https://github.com/thexmanxyz/Popup-System-Messages-Gantry/releases/download/v1.0.3/psm.j3.hydrogen.DE.v1.0.3.zip)

**Joomla Plugin - Helium:**
[English](https://github.com/thexmanxyz/Popup-System-Messages-Gantry/releases/download/v1.0.3/psm.j3.helium.EN.v1.0.3.zip) / [German](https://github.com/thexmanxyz/Popup-System-Messages-Gantry/releases/download/v1.0.3/psm.j3.helium.DE.v1.0.3.zip)
___

## Automatic Installation (Joomla only)
1. Download the Plugin of the *Popup System Messages Atom* for **Hydrogen, Helium or Global** installation.
2. Install it over the Joomla Plugin System.
3. Create or modify the `custom.scss` file located under `/[GANTRY_THEME]/custom/scss` and add the following line `@import "popup-system-messages";` at the end. Please check the list below to determine where the template folder for your CMS is located.

*If you install the plugin globally be aware that the resource location changes to `/media/gantry5/engines/nucleus`*

## Manual Installation
1. Download the **Default Package** of the *Popup System Messages Atom*.
2. Extract the files.
3. Copy the `.html.twig` and the `.yaml` file to your particle folder `/[GANTRY_THEME]/custom/particles`. Please check the [listing](https://github.com/thexmanxyz/Popup-System-Messages-Gantry#cms-template-folder) below to determine where the template folder for your CMS is located.
4. Copy the `.js` file to the folder `/[GANTRY_THEME]/custom/js`. Create the folder if it does not exist.
5. Copy the `.scss` file to the folder `/[GANTRY_THEME]/custom/scss`. Create the folder if it does not exist.
6. Create or modify the `custom.scss` file located under `/[GANTRY_THEME]/custom/scss` and add the following line `@import "popup-system-messages";` at the end.

## CMS Template Folder
Please be aware that the template folder path varies in dependence of the used CMS. Here is a list of the folders for the different platforms:

### Wordpress
`/wp-content/themes/[GANTRY_THEME]`

### Joomla
`/templates/[GANTRY_THEME]`

### Grav
`/user/data/gantry5/themes/[GANTRY_THEME]`

## Configuration
1. Go to your Gantry templating backend (e.g. Extensions/Templates).
2. Switch to **Page Settings** and add the new appearing Atom called **Popup System Messages** either globally to your site (**base outline**), to a specific template or page by dragging it to the designated section.
3. Configure the appearance according to your favor.

## Supported Parameters and Atom Options
* Replaces the default system messages with a popup
* Full rework of the [MrT Freebie Atom](https://rockettheme.com/forum/gantry5-for-joomla/278683-popupmessages-atom-freebie-by-mrt?limitstart=0) 
  * Especially rework and cleanup of the JS code base
  * Encapsulated JS code within a component 
  * Consider that system messages might already be there on page load
  * Event handling encapsulated and improved
  * JS constants (selectors and classes) located at one place
  * Minor bug fixes
  * Removed inline JS
* JS priority and placement (head or footer)
* JS configuration
  * Remote, Local and Default
* JS execution
  * Asynchronous
  * Deferred
  
## Showroom
Insight of the *Popup System Messages - Gantry Atom* configuration:

**Backend (1)** - *[General / JS (a)](/screenshots/backend_general_js.png)*

![1](/screenshots/backend_general_js.png)

## Future Tasks
- [ ] Add custom designs to the Atom.

## Known Issues
* None

## Dependencies
[Gantry Framework](http://gantry.org/)

[Original Thread of Freebie](https://rockettheme.com/forum/gantry5-for-joomla/278683-popupmessages-atom-freebie-by-mrt?limitstart=0)

[Feature Request](https://github.com/gantry/gantry5/issues/1652)

## Credits
Thanks to the Gantry team for providing a modern templating framework.

Thanks to [N8Solutions](https://github.com/N8Solutions) for testing and providing valuable input.

Thanks to [Mark Taylor a.k.a MrT](https://github.com/marktaylor46) for providing the prototype of the Atom.

## by [thex](https://github.com/thexmanxyz) | [gantryprojects](https://gantryprojects.com)
Copyright (c) 2019, free to use in personal and commercial software as per the [license](/LICENSE).
