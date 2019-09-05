@echo off

REM #######################################################
REM #                                                     #
REM #   Popup System Messages - Atom for Gantry           #
REM #                                                     #
REM #   Purpose: This project is a modified version of    #
REM #            the Popup System Messages Atom written   #
REM #            by Mark Taylor. It contains various      #
REM #            fixes and alters the behaviour of the    #
REM #            System Messages Particle so that         #
REM #            messages are displayed in a popup        #
REM #            instead of showing them in the default   #
REM #            container.                               #
REM #                                                     #
REM #   Author: Andreas Kar (thex) <andreas.kar@gmx.at>   #
REM #   Repository: https://git.io/fjrNR                  #
REM #   Homepage: https://gantryprojects.com              #
REM #                                                     #
REM #   -------------                                     #
REM #   Original Atom:                                    #
REM #   -------------                                     #
REM #   Author: Mark Taylor a.k.a MrT @ RocketTheme       #
REM #   Homepage: https://rockettheme.com/                #
REM #                                                     #
REM #######################################################

REM --- script variables ---
set scr_remove_folders=1
set scr_log_files=0

REM --- project variables ---
set prj_id=psm
set prj_rev=v1.0.0
set prj_name=popup-system-messages
set prj_fullname=Popup System Messages
set prj_title_hr=------------------------
set prj_def_lang=EN
set prj_sup_langs=EN, DE

REM --- packaging variables ---
set pkg_g5_name=atom.only
set pkg_g5_def_files=LICENSE, README.md
set pkg_j3_def_files=LICENSE.pdf
set pkg_expl_files=
set pkg_lang_id=yaml
set pkg_file_ext=yaml, html.twig
set pkg_release_folder=..\..\releases

set pkg_def_enable=1
set pkg_leg_enable=1
set pkg_helium_enable=1
set pkg_hydro_enable=1
set pkg_global_enable=1

"base-build.bat"