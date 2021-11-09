---
layout: post
# title:  from prototypes to production
title: scalable prototypes
date:   2021-11-09 20:26:44 +0200
categories: jekyll update
---

Some days ago, I was asked how to build software fast but at a high quality and flexible enough to scale from a prototype.
Many software engineers say you should rewrite your production code and take the prototype just as a quarry for snippets.

I think that if this is the case, something probably went wrong.
There are several reasons why rapid prototypes are written in the domain of software engineering:

1. tough time constraint
2. high degree of ambiguity about the desired result
3. very little knowledge about the library or frameworks to use
4. a combination of the points above

When there is a need for a new and unknown framework, you probably need some good luck to write scalably prototypes.
Otherwise, I have seen many examples where this actually worked.
The following should be an inspiration for how you can write rapid prototypes without producing too much waste.


## Code Structure as a Mirror of Uncertainty

All the points lead to the same situation: Writing code under high uncertainty.
Despite all the uncertainty, you might have any idea what you want to archive or at least what you want to try out next.
In this blog, I write a module for all kinds of parts in a software codebase. These can be files, libraries, processes, or anything similar.

Try to map each idea, each cause of uncertainty, to its own module.
Try to separate them from the parts you have a pretty good picture in your mind of how they should look like.
The probability that you might change them individually is relatively high.
The need to change multiple modules just because of one reason is many cases, unnecessary and annoying.
When there are multiple ideas glued together in single module, might result in extra effort when you will change one idea later.


## Thin Interfaces

Poorly maintained code is mainly a result of too thick interfaces between some parts of your code.
An interface can be anything from simple function signatures up to any remote requests.
If your interface is too large, you probably want to split your codebase into other modules. 

If you find yourself having a class where each method is just used by one module, you might be happier with a plain old data structure.
This seems to be the wrong kind of encapsulation: Instead of bringing the logic to the data, it might be easier to bring it to the logic.
That is useful when multiple modules use your data, but it is hard to find some common logic blocks used by multiple modules.
Note that each public method increases the thickness of your interface: When you change the method signature, you have to change the caller as well.


## Avoid Everything that is Not Needed

The [KISS](https://en.wikipedia.org/wiki/KISS_principle) principle states that there is no reason to add anything to your code that is not actually needed.
Everything you add without a good reason might increase the maintenance effort later without providing you any profit.
You most probably don't need getter or setters.
The default exception handling of your managed language, which prints out the stacktrace in the case of a failure, will most probably be good enough.
Why take the effort to catch all possible exceptions and handle them individually?

The [Hello World enterprise edition](https://github.com/Hello-World-EE/Java-Hello-World-Enterprise-Edition/tree/master/src/com/example) is a good example of how you can spend much time without gaining anything extra.


## Avoid Too Early Generalizations

Do you really need an interface or an abstract class before implementing your class?
Do you really need a class factory?
Writing code just for one use-case is often good enough.
You can add this kind of abstraction later in with constant effort.
Start to generalize not before you are facing a second use case.
How would you know before what both use-cases really will have in common and what differences will be? 


## Don't reinvent the Wheel

Look around and try to use existing solutions even if they don't match 100% of your need.
If they help you increase your speed and you can learn about what you actually need, using them is totally fine. 
In many cases, the most urgent pain points will ly anywhere else.