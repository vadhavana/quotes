var val=[
    {quote:"Don't worry about what anybody else is going to do. The best way to predict the future is to invent it.",
      author:"Alan Kay"
    },
   {quote:"Premature optimization is the root of all evil (or at least most of it) in programming",
    author:"Donald Knuth"
    },
    {quote:"Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.",
    author:"Mark Twain"
    },
    {quote:"No problem should ever have to be solved twice.",
    author:"Eric S. Raymond, How to become a hacker"
    },
    {quote:"Attitude is no substitute for competence.",
    author:"Eric S. Raymond"
    },
    {quote:"Fools ignore complexity. Pragmatists suffer it. Some can avoid it. Geniuses remove it.",
    author:"Alan J. Perlis"
    },
    {quote:"Within a computer natural language is unnatural.",
    author:"Alan J. Perlis"
    },
    {quote:"A little learning is a dangerous thing.",
    author:"Alexander Pope"
    },
    {quote:"There really is no learning without doing.",
    author:"Roger Schank"
    },
    {quote:"The best way to learn to live with our limitations is to know them.",
    author:"E. W. Dijkstra"
    },
    {quote:"Belive in your dreams and that anything is possible.",
      author:"usain bolt"
    },
    {quote:"Time goes on. So whatever you're going to do,do it.Do it now.Don't wait.",
    author:"carol Burnett"
    },
    {quote:"People who are crazy enough to think they can change the world,are the ones who do.",
            author:"Rob siltanen"
    },
    {quote:"Don't give up. Great things take time.",
            author:"Anonymous"
    },
    {quote:"Remember. It's just a bad day.Not a bad life.",
            author:"Anonymous"
    },
    {quote:"Never stop learning, because life never stops teaching.",
            author:"anonymous"
    },
    {quote:"Only i can change my life.No one can do it for me.",
            author:"carol Burnett"
    
    },
    {quote:"Don't make excuses,maek improvements.",
            author:"tyra Banks"
    },
    {quote:"If you want to increase your success rate,double your failure rate.",
            author:"Thomas J. Watson"
    },
    {quote:"Foucus on where you want to go,not on what you fear.",
            author:"Tony Robbins"
    }]
    
  
  function randomQuote(){
    return Math.floor(Math.random()*10);
  }
  
  function changeText(){
    var value=val[randomQuote()];
  
    var a=document.getElementById('author');
    a.innerHTML = value.author;
  
    var q=document.getElementById('quote');
    q.innerHTML = '" '+value.quote+'"';
  }