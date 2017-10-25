---
layout: post
#title: macOS firewall and Air Drop
#date: 2017-01-18
tags: [mac,sec]
---

I use Air Drop built into macOS to quickly transfer files from one computer to another on the local network. I also like locking down my firewall. It was annoying me that when I wanted to transfer a file I had to go to Apple Menu > System Preferences > Security \| Authenticate \| > Firewall > Firewall Options > Untick "Block all incomming connections".

It's much easier to use the firewall command line:

```bash
$ /usr/libexec/ApplicationFirewall/socketfilterfw --getblockall # Check the status of the blockall setting
$ sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setblockall off # Turn it off
$ sudo /usr/libexec/ApplicationFirewall/socketfilterfw --setblockall on # Turn it back on when done
```