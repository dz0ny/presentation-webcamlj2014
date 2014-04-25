Hi my name is Janez also know as dz0ny on various networks. 
My short talk today is about fight I've been enjoying lately 

it's about various version of PHP on which plugins I write for clients must work on.
I've used to hate PHP. Especially because of inconstancies between version, dev enviroment 
consisting of varius lamp/mamp/wamp builds, which would broke becouse of system upgrade,
upgrade goen wrong. Event with tools like Vagrant I occasinaly step on a mine. Sometimes chef
or puppet stopped to work, sometimes was virtualbox upgrade that went vary. Or entire VM broke, got corrupted.
there wasn't even easy way to get it back.

Until I discovered docker or got hyped about it on HN :D.
> How many of you know about docker?
Boy I was hyped!

What docker allows me is to build software component stacks as simple
as playing with LEGO blocks which boots under five seconds, so lets look at example using Docker and FIG.

FIG is just another tool that allows me to define recepies/manifests on how my environment should look like.
If I would like to add another PHP version with same data i can simply copy web block and change environment variables.

So whats the best part about Dcoker+FIG, i can just get to another computer install docker, fig. Bot takign less than 5 minutes
and have exactly same environment as on some other computer, hell i can even deploy same eviroment on server and boss can poke around freely.

So where can Docker also help me? Any ideas?

Because unit tests are boring, we can skip them in this presentation and focus on

Integration testing

The biggest problem in Wordpress plugin development is how parts of interact with each other
some plug-ins ca broke others and it is really hard to test that by hand and time consuming.

BDD come handy because it provides me tools to automatically or in case of bug test things in real enviroment in different browser
and my boss can actually see how different some things look in different setups.

In this case I simply test if plugin is activated without problems and the boss is happy :D

To conclude this talk. Docker allows me to be agile in PHP development, something that i never envisioned i would say about PHP.

Thank you. And if you have questions I am available to answer them.

