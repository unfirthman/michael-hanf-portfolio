
<h2 style='text-align: center'># Make a Chromebook a headless Ubuntu server. </h2>

### How to completely wipe your Chromebook, delete ChromeOS, and install Ubuntu.

## There are several basic steps:

<p style='text-align: center'> **I. Set Chromebook to run in Developer mode**

**II. Disable `write-protect` mode**

**III. Install new firmware**

**IV. Install Ubuntu Server**

**V. Install Extras (Neovim, ZSH)**</p>


To enable developer mode, first power off the computer. When powering back up, press the `Power` button while also pressing `ESC+Refresh`. This should boot you to the recovery screen. Once there, press `CTRL + D` to enable developer mode.


**This will wipe all ChromeOS user data. So if you have anything important on your Chromebook, back it up first!**


Follow the directions and prompts to fully enable developer mode and wipe the OS.

### chrx

At this point, you can choose to install Linux alongside ChromeOS using the awesome tech provided by [chrx](https://www.chrx.org). This is a great way to run Linux without disabling `write-protect` mode. However, the list of distribution options and flavors are limited.

I wanted to run this computer without a desktop, just from the command line, using Ubuntu Server.

### Disable Write-Protect Mode

For most Chromebooks, the next step is the trickiest.

Power down the computer, turn it over and unscrew the bottom. Once all the screws are out, use a small plastic lever (I used a guitar pick) to slide in between the bottom part and the top part. Open this up and you will now have access to the whole circuit board and battery.

There is a screw located on the main circuit board. For my computer (Acer C730E-C555 Celeron 2.16 ghz) it was located above the battery pack. It was the screw with the largest head and a small white arrow pointing to it on the board itself. Unscrew this.

Connect the bottom again. You can now power up the computer again!

### Install New Firmware

Back to software. We now move to another great website: [MrChromebox](https://www.MrChromebox.tech).
They provide Updated UEFI Firmware that will completely wipe your machine to a blank UEFI boot shell
with no OS at all.

On MrChromebox, navigate to the link on the left that says `Firmware Utility Script`. I would
recommend going to the website and following their directions; if you're comfortable with the command-line it is pretty simple.

Enter into ChromeOS as a guest. Enter into a terminal by pressing [CTRL + ALT + t]. Once there, type
`shell` at the prompt. You are now in a crosh shell.

First, A **WARNING**

Via [MrChromebox](https://www.MrChromebox.tech):

>  ... you must execute these commands **as a normal/non-root user**. Running them as root will break
things. DO NOT RUN 'SUDO SU' BEFORE RUNNING THE SCRIPT CMD BELOW.

Now with that clear, run this command:


`cd; curl -LO mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh`


You'll be offered a series of options. We will utilize option 2: Install/Update UEFI (Full ROM).
Hopefully the [WP] text is green and not red. If it is red, Write Protect mode is not disabled. Go
back to **STEP II**.

Once the firmware is installed, restart your computer! After it reboots, you'll be welcomed with the
simple glory of the UEFI boot shell. Congrats! You've hacked your computer!




### IV. Install Ubuntu Server

I should note that Ubuntu has [some great options](https://ubuntu.com/tutorials/create-a-usb-stick-on-ubuntu#1-overview) for creating a USB flash drive with which to install Ubuntu. I don't want to use another app, and we've been using the command-line this whole time, so let's keep going that way.

On a separate computer, download the current iso from [Ubuntu](https://ubuntu.com/download/server)

In a fresh terminal run `lsblk`.

You will get something like this in the output:

```
sda      8:16   1  14.9G  0 disk
├─sda1   8:17   1   1.6G  0 part
└─sda2   8:18   1   2.4M  0 part
```

Plug in the USB and run `lsblk` again. Now the output will look something like this:


```
sda      8:16   1  14.9G  0 disk
├─sda1   8:17   1   1.6G  0 part
└─sda2   8:18   1   2.4M  0 part

sdb      8:16   1  14.9G  0 disk
├─sdb1   8:17   1   1.6G  0 part /media/username/*yourUSB*
└─sdb2   8:18   1   2.4M  0 part
```


Dismount the USB using `sudo umount /dev/sd??` in this example it would be

`sudo umount /dev/sdb`

**Note** If you get an error message, try using `/sdb1` instead of `/sdb`

Next, we use the `dd` command. `dd` is destructive, and will wipe the USB, filling it with the iso.
The **if** will be filled with the path to the iso, ex. `/Downloads/*iso*`. The **of** will be filled with the path to your USB, ex. `/dev/sdb`.

`
sudo dd bs=4M if=path/to/input.iso of=/dev/sd<?> conv=fdatasync  status=progress
`
Leave the machine alone while it transfers the iso file to USB. Once you have an output signifying
the process has finished, unplug the USB.

Now plug it into the ChromebookOS and start it up! You need to find a menu for boot options, so
either hit the `esc` or wait for the normal shell to boot and then type `exit` into the terminal and
hit enter.

This will bring up a menu for boot options. Choose the USB and follow the prompts to install.
Congrats!

