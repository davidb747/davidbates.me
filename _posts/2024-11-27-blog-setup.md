---
title: Creating Your InfoSec Blog Using Jekyll-TeXt-Theme
tags: Guide Zero-to-Hero
#key: articles-item-cover-excerpt-readmore
cover: /assets/images/setup-blog/Article Cover Blog Setup.png
articles:
  data_source: site.sample_page
  show_excerpt: true
---
This is a comprehensive zero-to-hero guide for creating your own information security blog, showcasing your skills, interests, and passion to potential employers. Step-by-step, you'll learn how to build, customize, and optimize a professional-looking blog. It's not just a portfolio piece; it's also a fun and rewarding personal project to share your expertise!

# Domain Registration
I used [CloudFlare](https://dash.cloudflare.com/57e99a27ce4a19c3de68452f08fdd71a) as the registrar for purchasing the cipherbuu.net domain. Other registrars include GoDaddy or NameCheap. Choose the one that best fits your needs, but typically it wont matter and go with the one offering the best price. 

### Register Account on CloudFlare
Navigate to [CloudFlare](https://www.cloudflare.com/) and signup on the platform. 

### Search and Purchase Desired Domain
Think of some name for your domain: your name.com? somecoolcyberusername.net? Up to you! Search for this domain and purchase that sucker. Also do keep in mind your target audience. Is it for employers, xitter InfoSec community, or everyone? If you want to share your blog to, lets say some random forum users, you want to keep some semblance of OpSec. Therefore, when choosing a domain name just keep that in mind. The github Pages section will walk you through getting your freely hosted blog setup using githubs.

# GitHub Pages - Initial Setup
Github offers the ability to deploy a free static website (github Pages) using the **`` <github Username>.github.io ``** format, which we will change to be our purchased domain. You could always go the route of purchasing, hosting, and configuring your own webserver. However, this is my preferred alternative since I am *work smarter, not harder* type of person. Since this is attempting to take a rough zero-to-hero approach I will briefly cover registering on GitHub and setting up SSH-key authentication. 

## 1. Register an Account on GitHub
If you dont have an account on GitHub already, signup for one. We will generate an SSH key pair to authenticate our repository changes. I am executing the following commands from a Kali Linux VM, any Linux distribution will work or Windows Subsystem for Linux (WSL), either one. 

### Generate Key SSH Key Pair
Execute the following code to generate your SSH key pair:
{% highlight sh %}
ssh-keygen -t ed25519 -C "<github-account-email@email.com>"
{% endhighlight %}

- Save the key within the user's `.ssh` directory, potentailly opt to change file name to something specific 
- Press Enter when prompted for a passphrase 

### Add Key Pair to SSH Agent
Execute the following command to add the key pair:
```
sshadd /file/path/.ssh/id_ed25519
```

### Add Public Key to GitHub Account
Grab the file contents of the public key that was generated. This is going to be whatever you saved the key as ended with `.pub`. Navigate to GitHub -> Select Profile Picture -> Settings -> Under Access select SSH and GPG Keys. Select the "New SSH Key" option, give the key a unique title, paste in your public key, and continue with the "Add SSH Key" option.

You will now see your newly added SSH key populated under the "SSH Keys" section. You will now be able to push changes to the GitHub Pages' repository.

### Set GitHub Global Configuration
One final step requires that we see the Git global configuration to include our GitHub account's email and name. Execute the following commands replacing with your account's values.
```bash
git config --global user.email "<email>" 
git config --global user.name "<Full Name>"
```
## 2. Select Your Theme
GitHub Pages run off Jekyll for generating static sites. Plenty of ready to use Jekyll themes exist in this [community maintained repositories](https://github.com/topics/jekyll-theme) list. Additional theme galleries can be found on Jekyll's [theme docs](https://jekyllrb.com/docs/themes/) page. I will be going through setting up Kitian616's [Jekyll-TeXt-theme](https://github.com/kitian616/jekyll-TeXt-theme) because it provides out of the box customization choices and good documentation. Should you choose another theme the general setup should be relatively similar, at least in terms of getting the static site up and hosted on GitHub.  
## 3. Create a Fork of the Theme
I will documenting my own steps for setting up the theme; However, reference Jekyll-TeXt's [Quick Start](https://kitian616.github.io/jekyll-TeXt-theme/docs/en/quick-start) documentation for the other methods to get started. 
1. Navigate to Jekyll-TeXt's [repository](https://github.com/kitian616/jekyll-TeXt-theme)
2. Select the "Fork" option to create our own copy of the repository
![[Pasted image 20241123153929.png]]3. Name the Forked Repo `<github-username>.github.io` and make sure "Copy the master branch only" is selected
![[Pasted image 20241123154211.png]]
4. Change the About section's URL to reflec our GitHub Page domain
![[Pasted image 20241123162431.png]]
- After waiting a few minutes the GitHub Page site is accessible
![[Pasted image 20241123162648.png]]
# GitHub Pages - Getting Started
Now that we have our own forked version of the Jekyll-TeXt theme we can work on making it our own. This includes connecting our custom domain to the GitHub page. 
## 1. Route to Custom Domain
The [GitHub Docs]'s "Verifying your custom domain for GitHub pages" article walks through adding our domain. However, I found that this [StackOverFlow answer](https://community.cloudflare.com/t/1-a-record-multiple-ips/490816) provides a much more direct and linear approach. 
### Add GitHub A-Records
The first step add the GitHub A-records to CloudFlare. The most up to date IP addresses for the A-records can be found in the [Configuring an apex domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain) section of GitHub docs. To add the appropriate A-records complete the following steps:
1. Navigate to CloudFlare
2. Select the domain custom domain that you will be using for your GitHub Pages
3. Under DNS select the "DNS Records" option
4. For each of the IP addresses add an A-record like the one in the following screenshot. If you wanted to create a subdomain for your GitHub Pages, then you could specify that in the "Name" field.
```shell
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
![[Pasted image 20241124120731.png]]
### Add GitHub CNAME Record
The last DNS record we need to add within CloudFlare is the CNAME record. Reference the following screenshot of my CNAME record. Yours will instead be your own `<github username>.github.io`.
![[Pasted image 20241124122009.png]]
### Resolve to Custom Domain
With the proper DNS records setup we can now change our GitHub Page's domain. Within your `<username>.github.io` repository navigate to Settings -> Pages -> Custom Domain -> Enter our previously purchased domain -> Save. Wait for the DNS check to successfully resolve, then go to your domain to verify that everything has been properly done. Note, the "Enforce HTTPS" option is unable to be selected since we are proxying our traffic through CloudFlare. At least from what my 10-minute google side tangent taught m, but I could be mistaken. 
![[Pasted image 20241124122645.png]]
![[Pasted image 20241124122610.png]]
## 2. Local Testing Environment
We don't want to have to push updates to our repository each time that we want to see what our configuration changes will look like. Therefore, we will setup a local server to run our static site so that we can view our changes before pushing any changes.  
### Copy the Project Repository
We will start by copying the GitHub Page's repository to our own local server for configuration purposes. Navigate the GitHub repo -> select the "<>Code" dropdown bar --> SSH --> copy the command. Open a terminal and paste it into the terminal. ![[Pasted image 20241124193417.png]]
![[Pasted image 20241124193504.png]]
### Install Necessary gem Executables
Execute the following command on your system to install the necessary gem executables to server our site.
```bash
# Install from within repository
bundle install
```
- Note, do not run the password with sudo (root) permissions. Instead it will prompt you for a password during execution if it needs it.
### Start the Server
Execute the following command to host a local server of site.
```bash
# Install from within repositor
bundle exec jekyll serve
```

The command outputs our server address, which is `http://127.0.0.1:4000/`.
![[Pasted image 20241124194808.png]]

We can test to if its working by navigating to the server's address in our browser. To which we see it's working. Any changes we make will be automatically updated, so no need to start and stop the server. Although, the jekylly-TeXt does state the one following exception.

For technical reasons, ``__config.yml`` is **NOT** reloaded automatically when you use ``jekyll serve``. If you change this file, please restart the server process.
{:.warning}

[//]: # "![[Pasted image 20241124195009.png]]"

# ∞. Customize Our Blog
The next step is customize our blog and make it our own. Refence Jekyll-TeXt's [Configuration documentation](https://kitian616.github.io/jekyll-TeXt-theme/docs/en/configuration) for a full list of customization options and abilities. I will be documenting my customization steps. 
## 1. Custom Skin
Jekyll-TeXt comes with six (6) default color schemes for the site, which he refers to as skins. We can use the one you like best as a starter kit for our own custom skin. I will re-coloring the Dark skin. Start by navigating to where the directory where the skin's Syntactically Awesome Stylesheets (`.scss`) files are:
```
cd ~/CipherBuu.github.io/_sass/skins
```

Then create a copy of the skin you are going to be using a template:
```
cp _dark.scss _cipherbuu.scss
```

Whatever you make the filename is going to be how are you reference it within your `_config.yml`. Make sure to make that change in the config file's `text_skin` variable. Reference mine for example:

```
\## => Site Settings
##############################
text_skin: cipherbuu # "default" (default), "dark", "forest", "ocean", "chocolate", "orange", "cipherbuu"
```

The next part is just going to through trial and error phases of changing the colors. Some sites I like to use to assist in getting a good color scheme are:

#### [Coolors Palette Generator](https://coolors.co/image-picker)

- You can scroll the bar under "Picked palettes" to switch between various colors and generate different palettes
- [My Palette](https://coolors.co/94dbdd-6265b0-060307-13185b-cdd9ef)

#### [colormind Palette Visualizer](http://colormind.io/bootstrap/) ~ AI Website Colors Visualization Tool

- Use Colors Image to Extract a color from your image, take one, two, three, ... of the colors and apply them to this tool. 
- Uses AI to generate the a suitable color scheme, breaking down where the colors should be applied

#### Changing Colors
Variables to reflect what portions of the home page correalte to what:
- Main Colors:
`
// main colors
$main-color-1:     #ff007f; // Controls Text Hover Color 
$text-color-1:     #151219; //was fff

$main-color-2:     #fdb824; // ?? no idea 
$text-color-2:     #151219; //was fff

$main-color-3:     #637d9e; // Controls Button Colors
$text-color-3:     #fff; // Controls text color inside Buttons, highlight color, header/footer
`
- Main Page Background:
`
// page background
$background-color: #13185B;
`
- Header & Footer Background:
- Text Color:
`ruby
# To Change the site's page colors and :
/_sass/skins/_cipherbuu.scss

# Change the Following Values (defaults kept as comments):
//$text-color-d:     $text-color-theme-light-d;
//$text-color:       $text-color-theme-light;
//$text-color-l:     $text-color-theme-light-l;
$text-color-d:     #637d9e; // Controls Headings Text Color
$text-color:       #151219; // Controls body text color
$text-color-l:     #151219; // Controls Date Color (probably like alternate texts)
`

#### Change Logos:
- Header Logo Image:
`
# change the current logo.svg with your desired image
 ~/<gitpage>.github.io/_includes/svg/logo.svg
`
- Faicon.ico - Reference [TeXt Documentation](https://kitian616.github.io/jekyll-TeXt-theme/docs/en/logo-and-favicon)
