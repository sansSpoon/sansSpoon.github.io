---
layout: post
#title: Example content
#date: 2016-01-12
tags: [jpn,htm]
---

I'm learning Japanese! The class I'm going to, and the text book we use, deals primarily with Hiragana and Katakana. Kanji is a whole other beast and will take a while to learn.

I have recently found that some texts have reading aids called [Furigana](https://en.wikipedia.org/wiki/Furigana) which display the phonetic Hiragana characters above the Kanji character. My first though was, cool! My second thought was how can I mark this up in HTML. After a little research I found that you can use the `<ruby>` tag. Initially I thought this was using the [Ruby Language](https://en.wikipedia.org/wiki/Ruby_(programming_language)), which funny enough was developed by a Japanese guy *Yukihiro Matsumoto*. But no! [Ruby](https://www.w3.org/International/articles/ruby/markup.en.html) is part of the HTML 5 spec and has a very simple way to add Furigana to a string of text. Woot!

<span style="font-size: 2em;"><ruby><rb>私</rb><rt>わたし</rt></ruby>は<ruby><rb>日</rb><rt>に</rt><rb>本</rb><rt>ほん</rt><rb>語</rb><rt>ご</rt></ruby>を<ruby><rb>学</rb><rt>まな</rt></ruby>びます。</span>