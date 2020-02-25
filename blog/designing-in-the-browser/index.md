---
layout: post
title: Designing in the Browser
date: 2016-03-04
published: true
type: post
excerpt: I want to spend some time talking about why I design in the browser, and the merits of doing that. I am not a designer, however, I spend a lot of time working on UI, both for my job and for personal or side projects.
---
I want to spend some time talking about why I design in the browser, and the merits of doing that. I want to clear this up early - **I am not a designer.** I do, however, spend a lot of time working on UI, both for my job and for personal or side projects. With that out of the way, let's dive in.

## Process

When I'm working on adding a new feature that requires some kind of new UI component, here's how my process goes. I sit and think about it a while, then I open up my notebook and start sketching out some rough concepts. I have a few patterns that I tend to reuse (because I'm lazy and they generally work well), but they don't apply to all cases. I will usually check out Google or Pinterest for some inspiration on similar concepts. Then I start coding (because I am bad at Illustrator/Photoshop).

I jump into my code editor (Atom) and start writing the markup (HTML) that I think will be required to give me the structure that I want. I'll take a stab at class names too, but that will most likely end up changing. Once I've got the structure I want, I *might* do some basic styles, but usually I will just go to the browser and start designing.

At this point, I'm looking at my markup with no styles at all. Blank slate. I then use Chrome's developer tools to inspect elements and add the styles right in the browser. I can tweak as many things as I want until I get my new component/feature/whatever looking close to how I want. Then I open the inspector stylesheet, which gives me all the styles that I just wrote. I can then copy/paste that whole thing straight into my CSS file, save it, and voila!

If I'm working on a static website or side project, I might actually have my editor and my browser side-by-side and do all of this in the CSS file from the beginning, because I typically use Gulp and BrowserSync, which recompiles my LESS/Sass lightning quick and reloads my page. But when I have to wait for an app to rebuild, that takes a bit longer.

From there, it's minor tweaks (probably for hours, because I can never settle on a design) until I'm done.

## Benefits

I like my process. I write pretty good code quickly, so even when I'm prototyping or mocking up something, it doesn't take a ton of my time. The biggest benefit of doing it this way is that my prototypes are functional. We're not looking at a static Illustrator file - you can actually interact with it and see how it works. When I get feedback on something, my changes don't take too long, but then it's functional again when I am done. Compare this to a workflow in Illustrator where a designer comes up with a design, has a feedback loop, and then eventually settles on a final product. The developer codes it, then a demo happens. Changes from there are made in Illustrator, passed off to developer, and coded again. Lather, rinse, repeat.

I'm not knocking the value of designers, by any means. I actually worked on a project recently with a designer and LOVED it - I spend significantly less time doing mockups because she did all of that for me. Since she's much more talented than me, I know the design was right so I just focused on coding it. We moved very quickly. However, the process as a whole probably took just as long or longer than if I had done it by myself (admittedly, the end result would not have been nearly as gorgeous, because the designer is a rock star).

## Drawbacks

No process is perfect, and there are definitely drawbacks to designing in the browser. The major one I would say is that I throw away a lot of code, whether that's a mockup that ends up not being used at all or deleting a bunch of code as part of redesigning a prototype. That might not be so terrible, though, because the same might be true of a designer having to throw away or rework something in Illustrator. Probably pretty even there.

The other one that I'd say comes back to bite me sometimes is actually related to the biggest benefit. The mockups are interactive and functional, which is awesome, but I spend more time on the logic and data model as part of the design, which definitely does slow me down. This one is probably a personal problem. I could very well just do the markup and style it, but I get so sucked in to making it all work that I find myself going down rabbit holes of figuring out complex logic and data models that may just get thrown away. Those are not things that I should be considering as part of the design (at least not that early), but because I am in the code already I find myself drawn to the interactive part too.

## Conclusion

Overall, I still feel like designing in the browser has enough benefits to make it worth my time. I only have to do my design once, because I can take the code from the browser and drop it right into my CSS and be done. When my design is done, so is my code.


Thoughts?
