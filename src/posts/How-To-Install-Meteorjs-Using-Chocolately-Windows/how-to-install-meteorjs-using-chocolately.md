---
title: "How To Install Meteorjs Using Chocolatey (Windows Guide)"
author: "Tarran Prior"
date: "2019-05-30 13:37"
slug: "how-to-install-meteorjs-using-chocolatey-windoze"
published: true
---

[Meteor](https://www.meteor.com/) is a powerful, open source and **full-stack JavaScript framework** built on Node.js for seamlessly building and deploying **cross-platform** applications on the web, mobile, and desktop.

![Meteor.js](./meteor-choco.png)

> ## Important Notice - Use NPM!
> **You're now able to install Meteor.js with npm!**<br/>
> *Chocolatey's Meteor.js installer has since been deprecated and will not install the latest version, thus you shouldn't use this guide anymore.*
>
> To correctly install the latest version of Meteor using [npm](https://www.npmjs.com/), run:
>
> ```
> npm install -g meteor
> ```
> This will safely install the latest version so you can enjoy all of the latest features.

## 1 - System Requirements
Before you start the installation, ensure that your system meets the following requirements:
- **Windows 7+** or **Windows Server 2008+**
- **PowerShell Version 2.0+**
- [**.NET Framework 4+**](https://dotnet.microsoft.com/en-us/download/dotnet-framework) (The installation will attempt to install .NET 4.0 if you don't already have it installed.)

---

## 2 - Installing Chocolatey
In order to install Meteor, we’re first going to need to install another
package known as **Chocolatey**.

[Chocolatey](https://community.chocolatey.org/) is `apt-get` for Windows, and allows you to build and install full software deployments using the Windows command line.

To install Chocolatey, start by opening an administrative shell. This means opening **PowerShell** with **administrator privileges**.

If you prefer, you can also check out the non-administrative install instructions over at the official Chocolatey [docs](https://docs.chocolatey.org/en-us/choco/setup#non-administrative-install).

### PowerShell

1. Once you're in PowerShell, run `Get-ExecutionPolicy`. If it returns `Restricted`, run the following:
```
Set-ExecutionPolicy AllSigned
```

2. Next, run the following command:
```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

3. Lastly, wait a few seconds for the installation to complete. If you don't see any errors, you have successfully installed Chocolatey! Restart the shell to complete the changes.

Now to confirm that Chocolatey is working, type `choco` or `choco -?` and you'll see the following output:

```
C:\Users\User> choco
Chocolatey v0.10.15
Please run 'choco -?' or 'choco <command> -?' for help menu.

C:\Users\User>
```

And you're all set!

If you’re having any trouble installing Chocolatey using the methods
above, see the [Troubleshooting](https://docs.chocolatey.org/en-us/troubleshooting) section at Chocolatey.

---

## 3 - Installing Meteor
After installing Chocolatey, you’re now able to install Meteor. Finally!

Now you've got access to the `choco` - it's as simple as:

```
choco install meteor
```

And just like that, Meteor is installed on your machine and ready to use!