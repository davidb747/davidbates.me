---
title: How to play in hackthebox.com
tags: TeXt
article_header:
  type: cover
  image:
    src: /assets/images/h4ck.jpg
front matter:
layout: article

title: How to play in hackthebox.com
aside:
  toc: true
sidebar:
  nav: docs-en
---

How to play in hackthebox.com
<!--more-->

##Navigating to the Machines page

You’ll need to navigate to the left-hand side menu and click on Labs, then Machines from your dashboard.

 

This will take you to the Machines line-up page, where you can find all controls required for you to play the Machines. This includes VPN connection details and controls, Active and Retired Machines, a to-do list, and more.

 
### Machine difficulties

Machinescome in four separate difficulty levels; Easy, Medium, Hard, and Insane. 

 

They are named appropriately and have their own respective logo language:

 

 
## VPN Server selection

If you'd like to learn more about using the VPN ticketing system and subsequently connect to the labs to access the Machines, we have a dedicated article on the topic.

 

Click the button below to learn how more about Lab Access:

 
Introduction to Lab Access

 
Highlights

On the Machines page, you will see the highlighted Machines at the top. These can be any number of highlights, such as the staff pick, the next Machine to retire, and the newly announced Machine for the week.

 

For the Machines that have an upcoming launch date announced, there will be a timer to the actual release of the Machine along with some basic information about it.

 

For the Machine that have a retiring date set, there will also be a timer until retirement along with the option to Play Machine, which will start an instance of that machine on your selected VPN server.

 
Menus

There are three menus that you can select from to filter through the Machines lineup.

    Active Machines

    Retired Machines

    Machines To-Do List

    Scheduled Machine Releases

Active Machines

The Active Machines list displays the Machines available to everyone, both VIP and free account users. 

 

In the case of VIP users, these, like any other Machine, will need to be booted up by the user attempting to attack them. In the case of free users, these Machines will always be online on their respective Free Lab VPN servers.

 
Retired Machines

The Retired Machines list displays the Machines that have been retired and offer no more points upon completion. However, these Machines provide both the official and user-submitted write-ups for the educational advancement of users. You can use these write-ups to learn how to tackle the Machine and how different services and setup configurations can be abused to access a vulnerable system.

 

The list is split into two sections. The Free Retired Machines section contains a shortlist of recently retired Machines made available to free users. The Machines on this list are the only retired Machines that you can play without a VIP subscription. 

 

The VIP Retired Machines section contains all retired Machines, including the few available to free users.

 
Machines To-Do List

The Machines To-Do List contains Machines (both Active and Retired) that you’ve added to your own personal to-do list. To find out more about how to add a Machine to your to-do list, please read below.

 
Scheduled Machine Releases

This panel contains the next Machines' release dates and what machines are retiring:

 
Filters

You can filter each of the above lists according to your needs. The filter options are listed as drop-down menus above the machine entries in the respective list. These consist of the following:

 

    Status (Complete, Incomplete, both)

    Sort By (Release Date, Name, User Owns, Systems Owns, Rating, User Difficulty)

    Difficulty (Easy, Medium, Hard, Insane)

    OS (Linux, Windows, FreeBSD, Other)

You can also use the Advanced Search on the Retired Machines menu. This will allow you to filter in more detail according to the Attack Path, Attack Sub, and Programming Languages used during the attacks.

 

Remember to clear your filters if you’re looking for a certain Machine that you can’t find!

 
Picking a Machine to play on

Once you get accustomed to the line-up interface, you can pick a machine that you’d like to tackle.

 

Note that some of the items you will see here will be restricted to VIP accounts. You will not need to start up or stop the machine to play it for a free user account.

 

You can find the general Machine information in the header at the top. This will display the logo and name of the Machine, the difficulty rating, and the number of points offered upon completion of the Machine.

 

You can find the Machine state, control buttons, and other links. If you’re a VIP user, you can start or stop the Machine from here. 

 

All other users can add the Machine to their To-Do List, submit a review of it or visit the Forum link associated with it.

 

The Forum Thread link should be handy to beginners as this is where You can find posts about certain challenging tasks within the machine.

 

 On the main section of the Machine page, you can find the tabs related to general information, statistics, the activity of other users, the changelog for this Machine, other users' reviews, and walkthroughs (once this Machine retires).

 

Take your time getting accustomed to each of them before proceeding.

 
Free account - Playing on a Machine

If you’re using a free account, you only need to make sure your VPN is connected. You will not have the machine start/stop buttons because the Machines on the active line-up for the free servers will be online at all times for you to attack.

 

Following the steps above, you should already have an .ovpn connection pack ready and waiting in your ~/Downloads folder. From there, you only need to boot up your OpenVPN session with the following command after navigating to the ~/Downloads folder.

 

After you get the Initialization Sequence Completed message at the end of the OpenVPN log, you can open a new terminal tab and try to ping the Machine’s IP address. 
​
Many machines require adding a domain to your /etc/hosts file. You can easily do this by running the following command:

echo "10.10.129.55 mailing.htb" | sudo tee -a /etc/hosts > /dev/null

This will append the necessary entry to your host file.

 
VIP account - Playing on a Machine

As a VIP user, you will need to boot up an instance of the machine you’d like to tackle. The reason for this is that there’s a high number of VIP servers. While we can’t keep all the Machines running all of the time for all of these servers, we can give the users the option to start and stop a Machine on demand.

 

Following the steps above, you should already have an .ovpn connection pack ready and waiting in your ~/Downloads folder. From there, you only need to boot up your OpenVPN session with the following command after navigating to the ~/Downloads folder.

 

After you get the Initialization Sequence Completed message at the end of the OpenVPN log, you can open a new terminal tab and try to ping the Machine’s IP address.

 

Visiting the Machine page, you can see all the required information, as seen above.

 
Resetting a Machine

Sometimes a Machine gets stuck, or one of its services is manipulated by another user into failing. This requires a reset. To do so, you only need to press the Reset Machine button on the status section.

 

Resets will clear the progress for any other user, including you, so please make sure that there’s actually something wrong with the services and it’s not localized to your own attack process before issuing a reset. A best practice will be to ask other users if there’s something wrong with the Machine or how you are trying to tackle it.

 
Extending a Machine’s time

Any instance on any VIP server has a lifetime. Once this lifetime expires, the Machine is automatically shut off. If you are in the process of attacking an already close-to-expiry instance and wouldn’t like to be interrupted by it shutting down, you can extend the Machine’s time. This will give you ownership over that instance and extend the lifetime to a maximum of 24 hours.

 
Submitting found flags

Once you’ve found a flag, submit it immediately! There is a flag rotation mechanism in place, and if someone resets the Machine, you can lose all progress on your current instance as the instance will boot up from scratch, and the flag will be rotated.

 

To submit a flag, you can press the Submit button.

 

After submitting a flag, you can rate the difficulty :

 
Stopping a Machine

Once you are done attacking a Machine and would like to take on a different one, you will first need to shut down the previously owned instance. The platform will not let anyone have two active instances simultaneously, so you will have to click on the Stop Machine button to shut your previous one-off.

 
Reviewing a Machine

We highly encourage everyone to participate in the development of future Machines in Hack The Box by posting their opinions about the current ones that they are tackling! Once a Machine is owned by you, you can submit your review by clicking the Review Machine button.

 


​

<iframe width="896" height="504" src="https://www.youtube.com/embed/BEpRJ_S-LnU?si=oK6DXmA6wDYQ32lz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
