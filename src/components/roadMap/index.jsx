import React from 'react';
import { Box, Typography } from '@mui/material';

const milestones = [
  {
    title: '$1M Market Cap – The Launch of Boring',
    description: [
      'Welcome to the most uneventful crypto launch of all time. No hype, no drama, just a simple coin and a shovel.',
      'Community: Join us in the most boring crypto journey ever. Shovels, juice boxes, and… that’s about it.',
      'We will apply for the most boring coinmarketcap listing.',
    ],
    icon: '🪙',
  },
  {
    title: '$5M Market Cap – Launch the "Super Dull" NFT Collection',
    description: [
      'We’re making NFTs, but not just any NFTs. These are boring, non-unique, and practically indistinguishable. Collect them all... or not.',
      'Meme competition: Create the dullest, most lifeless meme and win a legendary prize — probably just a boring shovel.',
    ],
    icon: '🖼️',
  },
  {
    title: '$10M Market Cap – Shovel Logo Upgrade',
    description: [
      'Our logo gets even more boring! Now with an actual shovel. Because we’re serious about this digging thing.',
    ],
    icon: '⛏️',
  },
  {
    title: '$25M Market Cap – Boring Coin Community Meetup',
    description: [
      'We’ll host a virtual event where we’ll do absolutely nothing for an hour. Watch us talk about… shovels. And maybe some memes.',
      'Official Boring Coin “Merch” drop: T-shirts, hoodies, mugs — all with the most uneventful designs you’ve ever seen. Wear it to your next extremely average event.',
    ],
    icon: '👕',
  },
  {
    title: '$50M Market Cap – Meme the Moon... Or Not',
    description: [
      'We’re officially launching the most pointless meme competition in crypto. The winner will get eternal bragging rights and a special shovel award.',
      '"Boring Coin" Shovel Party — a virtual hangout where we just… dig. No rockets. Just shovels.',
    ],
    icon: '🚀❌',
  },
  {
    title: '$100M Market Cap – 24/7 Live Stream of Nothing',
    description: [
      'Bored of everything? Watch our live stream of absolutely nothing. Just a shovel, a juice box, and our logo. Welcome to crypto’s most uneventful live stream.',
      '"Dig to the Moon" campaign: Digging is the new space travel. Forget rockets, we’re just here for hitting the ground.',
    ],
    icon: '📺',
  },
  {
    title: '$250M Market Cap – World Domination (of Boredom)',
    description: [
      "At this point, we're literally the most boring coin in existence. No one’s excited, but everyone’s confusedly rich.",
      '"The Boring Coin Experience" — a virtual reality tour of... a boring tunnel. Enter at your own risk.',
    ],
    icon: '🌎',
  },
  {
    title: '$500M Market Cap – Ultimate Boring Meme',
    description: [
      'We’ll unveil the most boring meme in the history of memes. It’ll be so boring, it’s actually legendary.',
      'Ultimate Shovel Giveaway: Only the most “boring” community members will receive an exclusive gold shovel.',
    ],
    icon: '🥇',
  },
  {
    title: '$1B Market Cap – Boring Coin Global Impact',
    description: [
      'The entire world will now know the true meaning of boring. Thanks to you.',
      '“Boring Coin Everywhere” campaign — we’re putting boring on the map. Billboards, buses, and maybe even a few really dull documentaries.',
    ],
    icon: '🌍',
  },
];

const Roadmap = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/path/to/cartoon-dirt-background.png')`, // Replace with your cartoon background
        backgroundSize: 'cover',
        padding: '40px 20px',
      }}
      mt={95}
    >
      <Typography
        variant="h2"
        sx={{
          color: '#E6E6FA',
          fontFamily: "'Chewy', sans-serif",
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        The Boring Coin: Roadmap to... Mediocrity
      </Typography>

      <Box
        sx={{
          position: 'relative',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {milestones.map((milestone, index) => {
          const isLeft = index % 2 === 0;
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: isLeft ? 'row' : 'row-reverse',
                alignItems: 'center',
                marginBottom: '40px',
                position: 'relative',
              }}
            >
              {/* Connector Line */}
              {index !== 0 && (
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-20px',
                    left: isLeft ? '50%' : 'auto',
                    right: isLeft ? 'auto' : '50%',
                    height: '40px',
                    width: '2px',
                    backgroundColor: '#D2B48C',
                  }}
                />
              )}

              {/* Icon Container */}
              <Box
                sx={{
                  background: '#ffe0b3',
                  borderRadius: '50%',
                  width: '80px',
                  height: '80px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '36px',
                  margin: isLeft ? '0 20px 0 0' : '0 0 0 20px',
                }}
              >
                {milestone.icon}
              </Box>

              {/* Content */}
              <Box
                sx={{
                  flex: 1,
                  background: '#D2B48C',
                  borderRadius: '10px',
                  padding: '20px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                  // textAlign: isLeft ? 'left' : 'right',
                }}
              >
                <Typography
                  sx={{
                    color: '#5f3a19',
                    marginBottom: '10px',
                    fontWeight: '400',
                    fontFamily: "'Chewy'",
                    // color: '#000',
                    fontSize: '26px !important',
                  }}
                >
                  {milestone.title}
                </Typography>
                <ul
                  style={{
                    color: '#000',
                  }}
                >
                  {milestone.description.map((desc, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: '5px',
                        fontFamily: 'Chewy',
                        fontWeight: '300',
                        fontSize: '16px',
                      }}
                    >
                      {desc}
                    </li>
                  ))}
                </ul>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Roadmap;
