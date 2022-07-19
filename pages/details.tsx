import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import React from 'react';
import TimelineIcon from '@mui/icons-material/Timeline';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import SpeedIcon from '@mui/icons-material/Speed';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import SubjectIcon from '@mui/icons-material/Subject';

import styles from './details.module.css';
import PlotStructureChart from '../components/PlotStructureChart';

const Details = () => {
  return (
    <Box className={styles.container}>
      <Box className={styles.sidebar}>
        <Box className={styles.sidebarItem}>
          <Tooltip title="Plot Structure" placement="right">
            <IconButton>
              <TimelineIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={styles.sidebarItem}>
          <Tooltip title="Plot Turns" placement="right">
            <IconButton>
              <GraphicEqIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={styles.sidebarItem}>
          <Tooltip title="Pace" placement="right">
            <IconButton>
              <SpeedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={styles.sidebarItem}>
          <Tooltip title="Characters" placement="right">
            <IconButton>
              <GroupsOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={styles.sidebarItem}>
          <Tooltip title="Subjects" placement="right">
            <IconButton>
              <PieChartOutlineIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box className={styles.sidebarItem}>
          <Tooltip title="Explicit Content" placement="right">
            <IconButton>
              <SubjectIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box className={styles.title}>
        <Typography className={styles.analysisName}>
          Plot Structure Analysis
        </Typography>
      </Box>
      <Box className={styles.bookInfo}>
        <Typography sx={{ ml: 4 }} className={styles.bookName}>
          The Martian
        </Typography>
        <Typography sx={{ ml: 1 }}>by</Typography>
        <Typography sx={{ ml: 1 }} className={styles.authorName}>
          Andy Weir
        </Typography>
      </Box>
      <Box className={styles.graph}>
        <PlotStructureChart />
      </Box>
      <Box className={styles.book}>
        <Box className={styles.bookContainer}>
          <Box className={styles.bookPage}>
            LOG ENTRY: SOL 6 I’m pretty much fucked. That’s my considered
            opinion. Fucked. Six days in to what should be a greatest two months
            of my life, and it’s turned in to a nightmare. I don’t even know
            who’l read this. I guess someone wil find it eventualy. Maybe a
            hundred years from now. For the record… I didn’t die on Sol 6.
            Certainly the rest of the crew thought I did, and I can’t blame
            them. Maybe there’l be a day of national mourning for me, and my
            Wikipedia page wil say “Mark Watney is the only human being to have
            died on Mars.” And it’l be right, probably. Cause I’l surely die
            here. Just not on Sol 6 when everyone thinks I did. Let’s see… where
            do I begin? The Ares program. Mankind reaching out to Mars to send
            people to another planet for the very first time and expand the
            horizons of humanity blah, blah, blah. The Ares 1 crew did their
            thing and came back heroes. They got the parades and fame and love
            of the world. Ares 2 did the same thing, in a different location on
            Mars. They got a firm handshake and a hot cup of coffee when they
            got home. Ares 3. Wel. That was my mission. Wel, not mine per se.
            Commander Lewis was in charge. I was just one of her crew. Actualy,
            I was the very lowest ranked member of the crew. I would only be “in
            command” of the mission if I were the only remaining person. What do
            you know? I’m in command. I wonder if this log wil be recovered
            before the rest of the crew die of old age? I presume they got back
            to Earth al right. Wel, guys, if you’re reading this: It wasn’t your
            fault. You did what you had to do. In your position I would have
            done the same thing. I don’t blame you, and I’m glad you survived. I
            guess I should explain how Mars missions work, for any layman who
            may be reading this. We got to earth orbit the normal way, through
            an ordinary ship to Hermes. Al the Ares missions use Hermes to get
            to and from Mars. It’s realy big and cost a lot so NASA only built
            one. Once we got to Hermes, four additional unmanned missions
            brought us fuel and supplies while we prepared for our trip. Once
            everything was a go, we set out for Mars. But not very fast. Gone
            are the days of heavy chemical fuel burns and trans-Mars injection
            orbits. Hermes is powered by ion engines. They throw Argon out the
            back of the ship realy fast to get a tiny amount of acceleration.
            The thing is, it doesn't take much reactant mass, so a little Argon
            (and a nuclear reactor to power things) let us accelerate constantly
            the whole way there. You'd be amazed at how fast you can get going
            with a tiny acceleration over a long time. I could regale you with
            tales of how we had great fun on the trip, but I won’t. We did have
            fun, but I don’t feel like reliving it right now. Suffice it to say
            we got to Mars 124 days later without strangling each other. From
            there, we took the MDV (Mars Descent Vehicle) to the surface. The
            MDV is basicaly a big can with some light thrusters and parachutes
            attached. Its sole purpose is to get six humans from Mars orbit to
            the surface without kiling any of them. And now we come to the real
            trick of Mars exploration: Having al our shit there in advance. A
            total of 14 unmanned missions deposited everything we would need for
            surface operations. They tried their best to land al the supply
            vessels in the same general area, and did a reasonably good job.
            Supplies aren’t nearly so fragile as humans and can hit the ground
            realy hard. But they tended to bounce around a lot. Naturaly, they
            didn’t send us to Mars until they’d confirmed al the supplies had
            made it to the surface and their containers weren’t breached. Start
            to finish, including supply missions, a Mars mission takes about 3
            years. In fact, there were Ares 3 supplies en route to Mars while
            the Ares 2 crew were on their way home. The most important piece of
            the advance supplies, of course, was the MAV. The “Mars Ascent
            Vehicle.” That was how we would get back to Hermes after surface
            operations were complete. The MAV was soft-landed (as opposed to the
            baloon bounce-fest the other supplies had). Of course, it was in
            constant communication with Houston, and if there were any problems
            with it, we would pass by Mars and go back to Earth without ever
            landing. The MAV is pretty cool. Turns out, through a neat set of
            chemical reactions with the Martian atmosphere, for every kilogram
            of hydrogen you bring to Mars, you can make 13 kilograms of fuel.
            It’s a slow process, though. It takes 24 months to fil the tank.
            That’s why they sent it long before we got here. You can imagine how
            disappointed I was when I discovered the MAV was gone. It was a
            ridiculous sequence of events that led to me almost dying. Then an
            even more ridiculous sequence that led to me surviving. The mission
            is designed to handle sandstorm gusts up to 150 km/hr. So Houston
            got understandably nervous when we got whacked with 175 km/hr winds.
            We al got in our suits and huddled in the middle of the Hab, just in
            case it lost pressure. But the Hab wasn’t the problem. The MAV is a
            spaceship. It has a lot of delicate parts. It can put up with storms
            to a certain extent but it can’t just get sandblasted forever. After
            an hour and a half of sustained wind, NASA gave the order to abort.
            Nobody wanted to stop a month-long mission after only six days but
            if the MAV took any more punishment we’d al get stranded down here.
            We had to go out in the storm to get from the Hab to the MAV. That
            was going to be risky, but what choice did we have? Everyone made it
            but me. Our main communications dish, which relayed signals from the
            Hab to Hermes, acted like a parachute, getting torn from its
            foundation and carried with the torrent. Along the way, it crashed
            through the reception antenna array. Then one of those long thin
            antennae slammed in to me end first. It tore through my suit like a
            bulet through butter and I felt the worst pain of my life as it
            ripped open my side. I vaguely remember suddenly having the wind
            knocked out of me (puled out of me, realy) and my ears popping
            painfuly as the pressure of my suit escaped. The last thing I
            remember was seeing Johanssen hopelessly reaching out toward me. I
            awoke to the oxygen alarm in my suit. A steady, obnoxious beeping
            that eventualy roused me from a deep and profound desire to just
            fucking die. The storm had abated; I was face down, almost totaly
            buried in sand. As I groggily came to, I wondered why I wasn’t more
            dead. The antenna had enough force to punch through the suit and my
            side, but then it got stopped by my pelvis. So there was only one
            hole in the suit (and a hole in me, of course). I had been knocked
            back quite a ways and roled down a steep hil. Somehow I landed face
            down, which forced the antenna to a strongly oblique angle that put
            a lot of torque on the hole in the suit. It made a weak seal. Then,
            the copious blood from my wound trickled down toward the hole. As
            the blood reached the site of the breach, the water in it quickly
            evaporated from the airflow and low pressure, leaving only a gunky
            residue behind. More blood came in behind it and was also reduced to
            gunk. Eventualy, the blood sealed the gaps around the hole and
            reduced the leak to something the suit could counteract. The suit
            did its job admirably. Seeing the drop in pressure, it constantly
            flooded itself with air from my nitrogen tank to equalize. Once the
            leak became manageable, it only had to trickle new air in slowly the
            relieve the air lost. After a while, the CO2 (carbon dioxide)
            absorbers in the suit were expended. That’s realy the limiting
            factor to life support. Not the amount of oxygen you bring with you,
            but the amount of CO2 you can remove. In the Hab, we had the
            Oxygenator, a large piece of equipment that could break CO2 apart
            and give the oxygen back. But the spacesuits had to be portable, so
            they used a simple chemical absorption process with expendable
            filters. I’d been asleep long enough that my filters were useless.
            The suit saw this problem and moved in to an emergency mode the
            engineers cal “bloodletting”. Having no way to separate out the CO2,
            the suit deliberately vented air to the Martian atmosphere, then
            back-filed with nitrogen. Between the breach and the bloodletting,
            it quickly ran out of nitrogen. Al it had left was my oxygen tank.
            So it did the only thing it could to keep me alive. It started
            back-filing with pure oxygen. I now risked dying from oxygen
            toxicity, as the excessively high amount of oxygen threatened to
            burn up my nervous system, lungs, and eyes. An ironic death for
            someone with a leaky space suit: too much oxygen. Every step of the
            way would have had beeping alarms, alerts, and warnings. But it was
            the high-oxygen warning that woke me. The sheer volume of training
            for a space mission is astounding. I spent a week back on Earth
            practicing emergency space suit drils. I knew what to do. Carefuly
            reaching to the side of my helmet, I got the breach kit. It’s
            nothing more than a funnel with a valve at the smal end, and an
            unbelievably sticky resin on the wide end. The idea is you have the
            valve open and stick the wide end over a hole. The air can escape
            through the valve, so it doesn’t interfere with the resin making a
            good seal. Then you close the valve and you’ve sealed the breach.
            The tricky part was getting the antenna out of the way. I puled it
            out as fast as I could, wincing as the sudden pressure drop dizzied
            me and made the wound in my side scream in agony. I got the breach
            kit over the hole and sealed it. It held. The suit back-filed the
            missing air with yet more oxygen. Checking my arm readouts, I saw
            the suit was now at 85% oxygen. For reference, Earth’s atmosphere is
            about 21%. I’d be ok, so long as I didn’t spend too much time like
            that. I stumbled up the hil back toward the Hab. As I crested the
            rise, I saw something that made me very happy and something that
            made me very sad: The Hab was in-tact (yay!) and the MAV was gone
            (boo!). Right that moment I knew I was screwed. But I didn’t want to
            just die out on the surface. I limped back to the Hab and fumbled my
            way in to an airlock. As soon as it equalized, I threw off my
            helmet. Entering the Hab, I doffed the suit and got my first good
            look at the injury. It would need stitches. Fortunately, al of us
            had been trained in basic medical procedures, and the Hab had
            excelent medical supplies. A quick shot of local anesthetic,
            irrigate the wound, 9 stitches and I was done. I’d be taking
            antibiotics for a couple of weeks, but other than that I’d be fine.
            I knew it was hopeless, but I tried firing up the communication
            array. No signal, of course. The primary satelite dish had broken
            off, remember? And it took the reception antennae with it. The Hab
            had secondary and tertiary communication systems, but they were both
            just for talking to the MAV, which would use its much more powerful
            systems to relay to Hermes. Thing is, that only works if the MAV is
            stil around. I had no way to talk to Hermes. In time, I could locate
            the dish out on the surface, but it would take weeks for me to rig
            up any repairs, and that would be too late. In an abort, Hermes
            would leave orbit within 24 hours. The orbital dynamics made the
            trip safer and shorter the earlier you left, so why wait for no
            reason just to make the trip take longer? Checking out my suit, I
            saw the antenna had plowed through my bio-monitor computer. When on
            an EVA, al the crew’s suits are networked so we can see each others
            status. The rest of the crew would have seen the pressure in my suit
            drop to nearly 0, folowed immediately by my bio-signs going flat.
            Add to that I was sent tumbling down a hil with a spear through me
            in the middle of a sandstorm… yeah. They thought I was dead. How
            could they not? They may have even had a brief discussion about
            recovering my body, but regulations were clear. In the event a
            crewman died on Mars, he stayed on Mars. Leaving his body behind
            reduced weight for the MAV on the trip back. That meant more
            disposable fuel and a larger margin of error for the return thrust.
            No point in giving that up for sentimentality. So that’s the
            situation. I’m stranded on Mars. I have no way to communicate with
            Hermes or Earth. Everyone thinks I’m dead. I’m in a Hab designed to
            last 31 days. If the Oxygenator breaks down, I’l suffocate. If the
            Water Reclaimer breaks down, I’l die of thirst. If the Hab breaches,
            I’l just kind of explode. If none of those things happen, I’l
            eventualy run out of food and starve to death. So yeah. I’m fucked.
            Chapter 2 LOG ENTRY: SOL 7 Ok, I’ve had a good night’s sleep, and
            things don’t seem as hopeless as they did yesterday. Today I took
            stock of supplies, and did a quick EVA to check up on the external
            equipment. Here’s my situation: The surface mission was supposed to
            be 31 days. For redundancy, the supply probes had enough food to
            last the whole crew 56 days. That way if one or two probes had
            problems, we'd stil have enough food to complete the mission. We
            were six days in when al hel broke loose, so that leaves enough food
            to feed six people for 50 days. I’m just one guy, so it’l last me
            300 days. And that’s if I don’t ration it. So I’ve got a fair bit of
            time. The Hab stood up to the storm without any problems. Outside,
            things aren’t so rosy. I can’t find the satelite dish; it probably
            got blown kilometers away. The MAV is gone, of course. My crewmates
            took it up to Hermes. Though the bottom half (the landing stage) is
            stil there. No reason to take that back up when weight is the enemy.
            It includes the landing gear, the fuel plant, and anything else NASA
            figured it wouldn’t need for the trip back up to orbit. The MDV is
            on its side and there’s a breach in the hul. Looks like the storm
            ripped the cowling off the reserve chute (which we didn’t have to
            use on landing). Once the chute was exposed it dragged the MDV al
            over the place, smashing it against every rock in the area. Not that
            the MDV would be much use to me. Its thrusters can’t even lift its
            own weight. But it might have been valuable for parts. Might stil
            be. Both rovers are half-buried in sand, but they’re in good shape
            otherwise. Their pressure seals are in-tact. Makes sense. Operating
            procedure if a storm hits is to stop motion and wait for the storm
            to pass. They’re made to stand up to punishment. I’l be able to dig
            them out with a day or so of work. I’ve lost communication with the
            weather stations, placed a kilometer away from the Hab in 4
            directions. They might be in perfect working order for al I know.
            The Hab’s communications are so weak right now it probably can’t
            even reach a kilometer. The solar cel array was covered it in sand,
            rendering it useless (hint: solar cels need sunlight to make
            electricity). But once I swept them off, they returned to ful
            efficiency. Whatever I end up doing, I’l have plenty of power for
            it. 200 square meters of solar cels, with hydrogen fuel cels to
            store plenty of reserve. Al I need to do is sweep them off every few
            days. Things indoors are great, thanks to the Hab’s sturdy design. I
            ran a ful diagnostic on the Oxygenator. Twice. It’s perfect. If
            anything goes wrong with it, there is a short-term spare I can use.
            But it’s solely for emergency use while repairing the main one. The
            spare doesn’t actualy pul CO2 apart and recapture the oxygen. It
            just absorbs the CO2 the same way the spacesuits do. It’s intended
            to last 5 days before it saturates the filters, which means 30 days
            for me (just one person breathing, instead of six). So there’s some
            insurance there. The Water Reclaimer is working fine, too. The bad
            news is there’s no backup. If it stops working, I’l be drinking
            reserve water while I rig up a primitive distilery to boil piss.
            Also, I’l lose half a liter of water per day to breathing until the
            humidity in the Hab reaches its maximum and water starts condensing
            on every surface. Then I’l be licking the wals. Yay. Anyway, for
            now, no problems with the Water Reclaimer. So yeah. Food, water,
            shelter al taken care of. I’m going to start rationing food right
            now. Meals are pretty minimal already, but I think I can eat a 3/4
            portion per meal and stil be al right. That should turn my 300 days
            of food in to 400. Foraging around the medical area, I found the
            main bottle of vitamins. There’s enough multivitamins there to last
            years. So I won’t have any nutritional problems (though I’l stil
            starve to death when I’m out of food, no matter how many vitamins I
            take). The medical area has morphine for emergencies. And there’s
            enough there for a lethal dose. I’m not going to slowly starve to
            death, I’l tel you that. If I get to that point, I’l take an easier
            way out. Everyone on the mission had two specialties. I’m a botanist
            and mechanical engineer. Basicaly, I was the mission’s fix-it man
            who played with plants. The mechanical engineering might save my
            life if something breaks. I’ve been thinking about how to survive
            this. It’s not completely hopeless. There’l be humans back on Mars
            in about four years when Ares 4 arrives (assuming they didn’t cancel
            the program in the wake of my “death”). Ares 4 wil be landing at the
            Schiapareli Crater, which is about 3,200km away from my location
            here in the Acidalia Planitia. No way for me to get there on my own.
            But if I could communicate, I might be able to get a rescue. Not
            sure how they’d manage that with the resources on hand, but NASA has
            a lot of smart people. So that’s my mission now. Find a way to
            communicate with Earth. If I can’t manage that, find a way to
            communicate with Hermes when it returns in 4 years with the Ares 4
            crew. Of course, I don’t have any plan for surviving 4 years on 1
            year of food. But one thing at a time here. For now, I’m wel fed and
            have a purpose: “Fix the damn radio”. LOG ENTRY: SOL 10 Wel, I’ve
            done three EVAs and haven’t found any hint of the communication
            dish. I dug out one of the rovers and had a good drive around, but
            after days of wandering I think it’s time to give up. The storm
            probably blew the dish far away and then erased any drag-marks or
            scuffs that might have led to a trail. Probably buried it, too. I
            spent most of today out at what’s left of the communication array.
            It’s realy a sorry sight. I may as wel yel toward Earth for al the
            good that damned thing wil do me. I could throw together a
            rudimentary dish out of metal I find around the base, but this isn’t
            some walkie-talkie I’m working with here. Communicating from Mars to
            Earth is a pretty big deal, and requires extremely specialized
            equipment. I won’t be able to whip something up with tinfoil and
            gum. I need to ration my EVAs as wel as food. The CO2 filters are
            not cleanable. Once they’re saturated, they’re done. The mission
            accounted for a 4-hour EVA per crewmember per day. Fortunately, CO2
            filters are light and smal so NASA had the luxury of sending more
            than we needed. Al told, I have about 1500 hours worth of CO2
            filters. After that, any EVAs I do wil have to be managed with
            bloodletting the air. 1500 hours may sound like a lot, but I’m faced
            with spending at least 4 years here if I’m going to have any hope of
            rescue, with a minimum of several hours per week dedicated to
            sweeping off the solar array. Anyway. No needless EVAs. In other
            news, I’m starting to come up with an idea for food. My botany
            background may come in useful after al. Why bring a botanist to
            Mars? After al, it’s famous for not having anything growing here.
            Wel, the idea was to figure out how wel things grow in Martian
            gravity, and see what, if anything, we can do with Martian soil. The
            short answer is: quite a lot… almost. Martian soil has the basic
            building blocks needed for plant growth, but there’s a lot of stuff
            going on in Earth soil that Mars soil doesn’t have, even when it’s
            placed in an Earth-atmosphere and given plenty of water. Bacterial
            activity, certain nutrients provided by animal life, etc. None of
            that is happening on Mars. One of my tasks for the mission was to
            see how plants grow here, in various combinations of Earth or Mars
            soil and atmosphere. That’s why I have a smal amount of Earth soil
            and a bunch of plant seeds with me. I can’t get too excited,
            however. It’s about the amount of soil you’d put in a window
            planter-box, and the only seeds I have are a few species of grass
            and ferns. They’re the most rugged and easily grown plants on earth,
            so NASA picked them as the test subjects. So I have two problems:
            not enough dirt, and nothing edible to plant in it. But I’m a
            botanist, damn it. I should be able to find a way to make this
            happen. If I don’t, I’l be a realy hungry botanist in about a year.
            LOG ENTRY: SOL 11 I wonder how the Cubs are doing. LOG ENTRY: SOL 14
            I got my undergrad degree at the University of Chicago. Half the
            people who studied botany were hippies who thought they could return
            to some natural world system. Somehow feeding 7 bilion people
            through pure gathering. They spent most of their time working out
            better ways to grow pot. I didn’t like them. I’ve always been in it
            for the science, not for any New World Order bulshit. When they made
            compost heaps and tried to conserve every little ounce of living
            matter, I laughed at them. “Look at the sily hippies!” I would
            scoff. “Look at their pathetic attempts to simulate a complex global
            ecosystem in their back yard.” Of course now I’m doing exactly that.
            I’m saving every scrap of biomatter I can find. Every time I finish
            a meal, the leftovers go to the compost bucket. As for other
            biological material… The Hab has sophisticated toilets. Shit is
            usualy vaccum-dried, then accumulated in sealed bags to be discarded
            on the surface. Not any more! In fact, I even did an EVA to recover
            the previous bags of shit from before the crew left. Being
            completely desiccated, this particular shit didn’t have bacteria in
            it anymore, but it stil had complex proteins and would serve as
            useful manure. Adding it to water and active bacteria would quickly
            get it inundated, replacing any population kiled by the Toilet Of
            Doom. I found a big container and filed it with a bit of water, then
            added the dried shit. Since then, I’ve added my own shit to it as
            wel. The worse it smels, the more successful things are going.
            That’s the bacteria at work! Once I get some Martian soil in here, I
            can mix in the shit and spread it out. Then I can sprinkle the Earth
            soil on top. You might not think that would be an important step,
            but it is. There are dozens of species of bacteria living in Earth
            soil, and they're critical to plant growth. They'l spread out and
            breed like... wel, like a bacterial infection.. Within a week, the
            Martian soil wil be ready for plants to germinate in. But I won’t
            plant yet. I’l spread it out over a doubled area. It’l “infect” the
            new Martian soil. After another week, I’l double it again. And so
            on. Of course, al the while, I’l be adding al new manure to the
            effort. My asshole is doing as much to keep me alive as my brain.
            This isn’t a new concept I just came up with. People have speculated
            on how to make crop soil out of Martian dirt for decades. I’l just
            be putting it to the test for the first time. I searched through the
            food supplies and found al sorts of things that I can plant. Peas,
            for instance. Plenty of beans, too. I also found several potatoes.
            If *any* of them can stil germinate after their ordeal, that’l be
            great. With a nearly infinite supply of vitamins, al I need are
            calories of any kind to survive. The total floor-space of the Hab is
            about 92 square meters. I plan to dedicate al of it to this
            endeavor. I don’t mind walking on dirt. It’l be a lot of work, but
            I’m going to need to cover the entire floor to a depth of 10 cm.
            That means I’l have to transport 9.2 cubic meters of Martian soil in
            to the Hab. I can get maybe 1/10th of a cubic meter in through the
            airlock at a time, and it’l be backbreaking work to colect it. But
            in the end, if everything goes to plan, I’l have 92 square meters of
            croppable soil. Hel yeah I’m a botanist! Fear my botany powers! LOG
            ENTRY: SOL 15 Ugh! This is backbreaking work! I spent 12 hours today
            on EVAs to bring dirt in to the Hab. I only managed to cover a smal
            corner of the base, maybe 5 square meters. At this rate it’l take me
            weeks to get al the soil in. But hey, time is one thing I’ve got.
            The first few EVAs were pretty inefficient; me filing smal
            containers and bringing them in through the airlock. Then I got wise
            and just put one big container in the airlock itself and filed that
            with smal containers til it was ful. That sped things up a lot
            because the airlock takes about 10 minutes to get through. I ache al
            over. And the shovels I have are made for taking samples, not heavy
            digging. My back is kiling me. I foraged in the medical supplies and
            found some Vicodin. I took it about 10 minutes ago. Should be
            kicking in soon. Anyway, it’s nice to see progress. Time to start
            getting the bacteria to work on these minerals. After lunch. No 3/4
            ration today. I’ve earned a ful meal. LOG ENTRY: SOL 16 One
            complication I hadn’t though of: Water. Turns out being on the
            surface of Mars for a few milion years eliminates al the water in
            the soil. My master’s degree in botany makes me pretty sure plants
            need wet dirt to grow in. Not to mention the bacteria that has to
            live in it first. Fortunately, I have water. But not as much as I
            want. To be viable, soil needs 40 liters of water per cubic meter.
            My overal plan cals for 9.2 cubic meters of soil. So I’l eventualy
            need 368 liters of water to feed it. The Hab has an excelent Water
            Reclaimer. Best technology available on Earth. So NASA figured “why
            send a lot of water up there? Just send enough for an emergency.”
            Humans need 3 liters of water per day to be comfortable. They gave
            us 50 liters each. There are 300 liters total in the Hab. Looks like
            I won’t be able to cover the whole surface of the Hab with fertile
            soil. I’m wiling to dedicate al but an emergency 50 liters to the
            cause. That means I can feed 62.5 square meters at a depth of 10cm.
            About 2/3 of the Hab’s floor. It’l have to do. Anyway, I’ve only got
            a paltry 5 square meters covered at the moment. After that, things
            got disgusting. I spent three hours spreading shit on Martian sand.
            I didn’t have to do it with my hands, at least. I spread the sand
            out in a corner of the Hab, about 10cm thick. I wadded up a few
            blankets and uniforms from my departed crewmates to serve as one
            edge of a planter box (with the curved wals of the Hab being the
            rest of the perimeter). Then I sacrificed 20 liters of precious
            water to the dirt gods. 5 square meters was about right for the
            amount of manure I had handy. I dumped my big container o’ shit on
            to the soil and nearly puked from the smel. That smel’s going to
            stick around for a while, too. It’s not like I can open a window.
            Stil, you get used to it. I mixed this soil and shit together with a
            shovel, and spread it out evenly again. Then I sprinkled the Earth
            soil on top. Get to work, bacteria. I’m counting on you. In other
            news, today is Thanksgiving. My family wil be gathering in Chicago
            for the usual feast at my parent's house. My guess is it won't be
            much fun, what with me having died 11 days ago. Hel, they probably
            just got done gathering for my funeral. I wonder if they'l ever find
            out what realy happened. LOG ENTRY: SOL 22 Wow. Things realy came
            along. I got al the sand in and ready to go. 2/3 of the base is now
            dirt. And today I executed my first dirt-doubling. It's been a week,
            and the former Martian soil was rich and lovely. Two more doublings
            and I wil have covered the whole field. Al that work was great for
            my morale. It gave me something to do. But after things settled down
            a bit, and I had dinner while listening to Johanssen’s Beatles music
            colection, I got depressed again. Doing the math, this won’t keep me
            from starving. My best bet for making calories is potatoes. They
            grow prolificaly and have a reasonable caloric content (770 calories
            per kg). I’m pretty sure the ones I have wil germinate. Problem is I
            can’t grow enough of them. In 62 square meters, I could grow maybe
            150kg of potatoes in 400 days (the time I have before running out of
            food). That’s a grand total of 115,500 calories, a sustainable
            average of 288 calories per day. With my height and weight, if I’m
            wiling to starve a little, I need 1500 calories per day. Not even
            close. So I can’t just live off the land for ever. But I can extend
            my life. The potatoes wil last me 76 days. Potatoes grow continualy,
            so in those 76 days, I can grow another 22,000 calories of potatoes,
            which wil tide me over for another 15 days. After that, it’s kind of
            pointless to continue the trend. Al told it buys me about 90 days.
            So now I’l start starving to death on Sol 490 instead of Sol 400.
            It’s progress, but any hope of survival rests on me surviving until
            Sol 1412, when Ares 4 wil land. There’s about a thousand days of
            food I don’t have. And I don’t have a plan for how to get it. Shit.
            Chapter 3 LOG ENTRY: SOL 25 Remember those old math questions you
            had in Algebra class? Where water is entering a container at a
            certain rate and leaving at a different rate and you need to figure
            out when it’l be empty? Wel, that concept is critical to the “Mark
            Watney doesn’t die” project I’m working on. I need to create
            calories. And I need enough to last four years. I figure if I don’t
            get rescued by Ares 4, I’m dead anyway. So that’s my target: four
            years. I have plenty of multivitamins; over double what I need. And
            there’s five times the minimum protein in each food pack, so careful
            rationing of portions takes care of my protein needs for at least
            four years. My general nutrition is taken care of. I just need
            calories. I need 1500 calories every day. I have 400 days of food to
            start off with. So how many calories do I need to generate per day
            along the entire time period to stay alive for 1400 days total (the
            time til Ares 4 arrives)? I’l spare you the math. The answer is a
            cool 1000. I need to create 1000 calories per day with my farming
            efforts to survive until Ares 4 gets here. Actualy, a little more
            than that, because it’s sol 25 right now and I haven’t actualy
            planted anything yet. With my 62 square meters of farmland, I’l be
            able to create about 288 calories per day. I need to bring that up
            to 1000. I need four times my current plan’s production to survive.
            I need more surface area for farming, and I need water to hydrate
            the soil. So let’s take the problems one at a time. How much
            farmland can I realy make? There are 92 square meters in the Hab.
            Let’s say I could make use of al of it. Also, there are five unused
            bunks. Let’s say I put soil in on them, too. They’re 2 square meters
            each, giving me 10 more square meters. So we’re up to 102. The Hab
            has three lab tables, each about 2 square meters. I want to keep one
            for my own use, leaving two for the cause. That’s another four
            square meters, bringing the total to 106. I have two Martian rovers.
            They have pressure seals, alowing the occupants to drive in ease,
            without spacesuits, as they spent long periods traversing the
            surface. They’re too cramped to plant crops in, and I want to be
            able to drive them around anyway. But both rovers have an emergency
            pop-tent. There are a lot of problems with using pop-tents as
            farmland, but they have 10 square meters of floor space each.
            Presuming I can overcome the problems, they net me another 20 square
            meters, bringing my farmland up to 126. 126 square meters of
            farmable land. That’s something to work with. Not nearly enough
            water to moisten the soil, but like I said, one thing at a time. The
            next thing to consider is how efficient I can be in growing
            potatoes. I based my crop yield estimates on the potato industry
            back on Earth. But potato farmers aren’t in a desperate race for
            survival like I am. Can I get a better yield? For starters, I can
            give attention to each individual plant. I can trim them and keep
            them healthy and not interfering with each other. Also, as their
            flowering bodies breach the surface, I can replant them deeper, then
            plant younger plants above them. For normal potato farmers, it’s not
            worth doing because they’re working with literaly milions of potato
            plants. Also, this sort of farming annihilates the soil. Any farmer
            doing it would turn their land into a dust bowl within 12 years.
            It’s not sustainable. But who gives a shit? I just need to survive
            four years. I estimate I can get 50% higher yield by using these
            tactics. And with the 126 square meter farmland (just over double
            the 62 square meters I have) it works out to be over 900 calories
            per day. That’s real progress. I’d stil be in danger of starvation,
            but it gets me in the range of survival. I might be able to make it
            by nearly starving but not quite dying. I could reduce my caloric
            use by minimizing manual labor. I could set the temperature of the
            Hab higher than normal, meaning my body expends less energy keeping
            its temperature. I could cut off an arm and eat it, gaining me
            valuable calories and reducing my overal caloric need. No, not
            realy. So let’s say I could clear up that much farmland. Seems
            reasonable. Where do I get the water? To go from 62 to 126 square
            meters of farmland at 10cm deep, I’l need 6.4 more cubic meters of
            soil (more shoveling, whee!) and that’l need over 250 liters of
            water. The 50L I have is for me to drink if the Water Reclaimer
            breaks. So I’m 250L short of my 250L goal. Bleh. I’m going to bed.
            LOG ENTRY: SOL 26 It was a back-breaking yet productive day. I was
            sick of thinking, so instead of trying to figure out where I’l get
            250L of water, I did some manual labor. I need to get a whole
            assload more soil in to the Hab, even if it is dry and useless right
            now. I got a cubic meter in before getting exhausted. Then, a minor
            dust-storm dropped by for an hour and covered the solar colectors
            with crap. So I had to suit up *again* and do *another* EVA. I was
            in a pissy mood the whole time. Sweeping off a huge field of solar
            cels is boring and physicaly demanding. But once the job was done, I
            came back to my Little Hab on the Prairie. It was about time for
            another dirt-doubling, so I figured I may as wel get it over with.
            It took an hour. One more doubling and the usable soil wil al be
            good to go. Also, I figured it was time to start up a seed crop. I’d
            doubled the soil enough that I could afford to leave a little corner
            of it alone. I had 12 potatoes to work with. I am one lucky
            son-of-a-bitch they aren’t freeze-dried or mulched. Why did NASA
            send 12 whole potatoes, refrigerated but not frozen? And why send
            them along with us as in-pressure cargo rather than in a crate with
            the rest of the Hab supplies? Because Thanksgiving was going to
            happen while we were doing surface operations, and NASA’s shrinks
            thought it would be good to make a meal together. Not just to eat
            it, but to actualy prepare it. There’s probably some logic to that,
            but who cares? I cut each potato in to 4 pieces, making sure each
            piece had at least 2 eyes. The eyes are where they sprout from. I
            let them sit for a few hours to harden a bit, then planted them, wel
            spaced apart, in the corner. God speed, little taters. My life
            depends on you. Normaly, it takes 90 days to yield ful sized
            potatoes. But I can’t wait that long. I’l need to cut up al the
            potatoes from this crop to seed the rest of the field. By setting
            the Hab temperature to a balmy 25.5C, the plants wil grow quicker.
            Also, the internal lights wil provide plenty of “sunlight” and I’l
            make sure they get lots of water (once I figure out where to get
            water). There wil be no foul weather, or any parasites to hassle
            them, or any weeds to compete with for soil or nutrients. With al
            this going for them, they should yield healthy, sproutable tubers
            within 40 days. I figured that was enough being Farmer Mark for one
            day. A ful meal for dinner. I’d earned it. Plus, I’d burned a ton of
            calories and I wanted them back. I rifled through Commander Lewis’s
            stuff until I found her personal data-stick. Everyone got to bring
            whatever digital entertainment they wanted, and I was tired of
            listening to Johanssen’s Beatles Albums for now. Time to see what
            Lewis had. Crappy TV shows. That’s what she had. Countless entire
            runs of TV shows from forever ago. Wel. Beggars can’t be choosers.
            “Three’s Company” it is. LOG ENTRY: SOL 29 Over the last few days, I
            got al the dirt in that I’d need. I prepped the tables and bunks for
            holding the weight of soil, and even put the dirt in place. There’s
            stil no water to make it viable, but I have some ideas. Realy bad
            ideas, but they’re ideas. Today’s big accomplishment was setting up
            the pop-tents. The problem with the rovers’ pop-tents is they
            weren’t designed for frequent use. The idea was you’d throw out a
            pop-tent, get in, and wait for rescue. The airlock is nothing more
            than valves and two doors. Equalize the airlock with your side of
            it, get in. equalize with the other side, get out. This means you
            lose a lot of air each use. And I’l need to get in there at least
            once a day. The total volume of each pop tent is pretty low, so I
            can’t afford to lose air from it. I spent *hours* trying to figure
            out how to attach a pop-tent airlock to a Hab airlock. I have three
            airlocks in the Hab. I’d be wiling to dedicate two to pop-tents.
            That would have been awesome. The frustrating part is pop-tent
            airlocks *can* attach to other airlocks! You might have injured
            people in there, or not enough space suits. You need to be able to
            get people out without exposing them to the Martian atmosphere. But
            the pop-tents were designed for your crewmates to come rescue you in
            a *rover*. The airlocks on the Hab are much larger and completely
            different than the airlocks on the rovers. When you think about it,
            there’s realy no reason to attach a pop-tent to the Hab. Unless
            you’re stranded on Mars and everyone thinks you’re dead and you’re
            in a desperate fight against time and the elements to stay alive.
            But, you know, other than that edge case there’s no reason. So I
            finaly decided I’d just take the hit. I’l be losing some air every
            time I enter or exit a pop-tent. The good news is each pop-tent has
            an air feed valve on the outside. Remember, these are emergency
            shelters. The occupants might need air, and you can provide it from
            a rover by hooking up an air line. It’s nothing more than a tube
            that equalizes the rover’s air with the pop-tent’s. The Hab and the
            rovers use the same valve and tubing standards, so I was able to
            attach the pop tents directly to the Hab. That'l automaticaly
            replenish the air I lose with my entries and exits (what we NASA
            folk cal ingress and egress). NASA was not fucking around with these
            emergency tents. The moment I pushed the panic button in the rover,
            there was an ear- popping whoosh as the pop-tent fired out, attached
            to the rover airlock. It took about two seconds. I closed the
            airlock from the rover side and ended up with a nice, isolated
            pop-tent. Setting up the equalizer hose was trivial (for once I’m
            using equipment the way it was designed to be used). Then, after a
            few trips through the airlock (with the air-loss automaticaly
            equalized by the Hab) I got the dirt in. I repeated the process for
            the other tent. Everything went realy easily. Sigh… water. In high
            school, I played a lot of Dungeons and Dragons. (You may not have
            guessed this Botanist / Mechanical Engineer was a bit of a nerd in
            high school, but indeed I was). In the game I played a Cleric. One
            of the magic spels I could cast was “Create Water”. I always thought
            it was a realy stupid spel, and it never came up. Boy what I
            wouldn’t give to be able to do that in real life right now. Anyway.
            That’s a problem for tomorrow. For tonight, I have to get back to
            “Three’s Company.” I stopped last night in the middle of the episode
            where Mr. Roper saw something and took it out of context. LOG ENTRY:
            SOL 30 I have an idioticaly dangerous plan for getting the water I
            need. And boy do I mean *dangerous*. But I don’t have much choice.
            I’m out of ideas and I’m due for another dirt-doubling in a few
            days. When I do the final doubling, I’l be doubling on to al that
            new soil I’ve brought in. If I don’t wet it first, it’l just die.
            There isn’t a lot of water here on Mars. There’s ice at the poles,
            but they’re too far away. If I want water I’l have to make it from
            scratch. Fortunately, I know the recipe: Take hydrogen. Add oxygen.
            Burn. Let’s take them one at a time. I’l start with oxygen. I have a
            fair bit of O2 reserves, but not enough to make 250 liters of water.
            Two high-pressure tanks at one end of the Hab are my entire supply
            (plus the air in the Hab of course). They each contain 25 liters of
            liquid O2. The Hab would only use them in an emergency; it has the
            Oxygenator to balance the atmosphere. The reason the O2 tanks are
            here is to feed the spacesuits and rovers. Anyway, the reserve
            oxygen would only be enough to make 100L of water (50L of O2 makes
            100L of molecules that only have one O each). That would mean no
            EVAs for me, and no emergency reserves. And it would make less than
            half the water I need. Out of the question. But oxygen’s easier to
            find on Mars than you might think. The atmosphere is 98% CO2. And I
            happen to have a machine whose sole purpose is liberating oxygen
            from CO2. Yay Oxygenator! One problem: The atmosphere is very thin.
            About 1/90th the pressure on Earth. So it’s hard to colect. Getting
            air from outside to inside is nearly impossible. The whole purpose
            of the Hab is to keep that sort of thing from happening. The tiny
            amount of Martian atmosphere that enters when I use an airlock is
            laughable. That’s where the MAV fuel plant comes in. My crewmates
            took the MAV away weeks ago. But the bottom half of it stayed
            behind. NASA is not in the habit of putting unnecessary shit in to
            orbit. It left the landing gear, ingress ramp, and fuel plant
            behind. Remember how the MAV made its own fuel with help from the
            Martian atmosphere? Step one of that is to colect CO2 and store it
            in a high pressure vessel. Once I get that hooked up to the Hab’s
            power, it’l give me half a liter of liquid CO2 per hour,
            indefinitely. After 5 days it’l have made 125L of CO2, which wil
            make 125L of O2 after I feed it through the Oxygenator. That’s
            enough to make 250L of water. So I have a plan for oxygen. The
            hydrogen wil be a little trickier. I considered raiding the hydrogen
            fuel-cels, but I need those batteries to maintain power at night. If
            I don’t have that, It’l get too cold. I could bundle up, but the
            cold would kil my crops. And each fuel cel only has a smal amount of
            H2 anyway. It’s just not worth sacrificing so much usefulness for so
            little gain. The one thing I have going for me is that energy is not
            a problem. I don’t want to give that up. So I’l have to go a
            different route. I often talk about the MAV. But now I want to talk
            about the MDV. During the most terrifying 23 minutes of my life,
            four of my crewmates and I tried not to shit ourselves while
            Martinez piloted the MDV down to the surface. It was kind of like
            being in a tumble-dryer. First, we descended from Hermes, and
            decelerated our orbital velocity so we could start faling properly.
            Everything was smooth until we hit the atmosphere. If you think
            turbulence is rough in a jetliner going 720kph, just imagine what
            it’s like at 28,000kph. Several staged sets of chutes deployed
            automaticaly to slow our descent, then Martinez manualy piloted us
            to the ground, using the thrusters to slow descent and control our
            lateral motion. He’d trained for this for years, and he did his job
            extraordinarily wel. He exceeded al plausible expectations of
            landings, putting us just nine meters from the target. The guy just
            plain owned that landing. Thanks, Martinez! You may have saved my
            life! Not because of the perfect landing, but because he left so
            much fuel behind. Hundreds of liters of unused Hydrazine. Each
            molecule of Hydrazine has four hydrogen atoms in it. So each liter
            of Hydrazine has enough hydrogen for *two* liters of water. I did a
            little EVA today to check. The MDV has 292L of juice left in the
            tanks. Enough to make a almost 600L of water! Way more than I need!
            There’s just one catch: Liberating hydrogen from Hydrazine is… wel…
            it's how rockets work. It’s realy, realy hot. And dangerous. If I do
            it in an oxygen atmosphere, the heat and newly liberated hydrogen
            wil explode. There’l be a lot of H2O at the end, but I’l be too dead
            to appreciate it. At its root, Hydrazine is pretty simple. The
            Germans used it as far back as World War II for rocket-assisted
            fighter fuel (and occasionaly blew themselves up with it). Al you
            have to do is run it over a catalyst (which I can extract from the
            MDV engine) and it wil turn in to nitrogen and hydrogen. I’l spare
            you the chemistry, but the end result is that 5 molecules of
            Hydrazine becomes 5 molecules of harmless N2 and 10 molecules of
            lovely H2. During this process, it goes through an intermediate step
            of being ammonia. Chemistry, being the sloppy bitch it is, ensures
            there’l be some ammonia that doesn’t react with the Hydrazine, so
            it’l just stay ammonia. You like the smel of ammonia? Wel it’l be
            prevalent in my increasingly helish existence. The chemistry is on
            my side. The question now is how do I actualy make this reaction
            happen slowly and how do I colect the hydrogen? The answer is: I
            don’t know. I suppose I’l think of something. Or die. Anyway, much
            more important: I simply can’t abide the replacement of Chrissie
            with Cindy. “Three’s Company” may never be the same after this
            fiasco. Time wil tel. Chapter 4 LOG ENTRY: SOL 32 So I ran in to a
            bunch of problems with my water plan. My idea is to make 600L of
            water (limited by the hydrogen I can get from the Hydrazine). That
            means I’l need 300L of liquid O2. I can create the O2 easily enough.
            It takes 20 hours for the MAV fuel plant to fil its 10L tank with
            CO2. The Oxygenator can turn it in to O2, then the Atmospheric
            Regulator wil see the O2 content in the Hab is high, and pul it out
            of the air, storing it in the main O2 tanks. They’d fil up, so I’d
            have to transfer O2 over to the rovers’ tanks and even space suit
            tanks as necessary. But I can’t create it very quickly. At 1/2L of
            CO2 per hour, it wil take 25 days to make the oxygen I need. That’s
            longer than I’d like. Also, there’s the problem of storing the
            hydrogen. The air tanks of the Hab, the rovers, and al the space
            suits add up to exactly 374L of storage. To hold al the materials
            for water, I would need a whopping 900L of storage. I considered
            using one of the rovers as a “tank”. It would certainly be big
            enough, but it just isn’t designed to hold in that much pressure.
            It’s made to hold (you guessed it) one atmosphere. I need vessels
            that can hold 50 times that much. I’m sure a rover would burst. The
            best way to store the ingredients of water is to make them be water.
            So what’s what I’l have to do. The concept is simple, but the
            execution wil be incredibly dangerous. Every 20 hours, I’l have 10L
            of CO2 thanks to the MAV fuel plant. I’l vent it in to the Hab via
            the highly scientific method of detaching the tank from the MAV
            landing struts, bringing it in to the Hab, then opening the valve
            until it’s empty. The Oxygenator wil turn it in to oxygen in its own
            time. Then, I’l release Hydrazine, VERY SLOWLY, over the iridium
            catalyst, to turn it in to N2 and H2. I’l direct the hydrogen to a
            smal area and burn it. As you can see, this plan provides many
            opportunities for me to die in a fiery explosion. Firstly, Hydrazine
            is some serious death. If I make any mistakes, there’l be nothing
            left but the “Mark Watney Memorial Crater” where the Hab once stood.
            Presuming I don’t fuck up with the Hydrazine, there’s stil the
            matter of burning hydrogen. I’m going to be setting a fire. In the
            Hab. On purpose. If you asked every engineer at NASA what the worst
            scenario for the Hab was, they’d al answer “fire.” If you asked them
            what the result would be, they’d answer “death by fire.” But if I
            can pul it off, I’l be making water continuously, with no need to
            store hydrogen or oxygen. It’l be mixed in to the atmosphere as
            humidity, but the Water Reclaimer wil pul it out. I don’t even have
            to perfectly match the Hydrazine end of it with the fuel plant CO2
            part. There’s plenty of oxygen in the Hab, and plenty more in
            reserve. I just need to make sure not to make so much water I run
            myself out of O2. I hooked up the MAV fuel plant to the Hab’s power
            supply. Fortunately they both use the same voltage. It’s chugging
            away, colecting CO2 for me. Half-ration for dinner. Al I
            accomplished today was thinking up a plan that’l kil me, and that
            doesn’t take much energy. I’m going to finish off the last of
            “Three’s Company” tonight. Frankly, I like Mr. Furley more than the
            Ropers. LOG ENTRY: SOL 33 This may be my last entry. I’ve known
            since Sol 6 there was a good chance I’d die here. But I figured it
            would be when I ran out of food. I didn’t think it would be this
            early. I’m about the fire up the Hydrazine. Our mission was designed
            knowing that anything might need maintenance, so I have plenty of
            tools. Even in a space-suit, I was able to pry the access panels off
            the MDV and get at the six Hydrazine tanks. I set them in the shadow
            of a rover to keep them from heating up too much. There’s more shade
            and a cooler temperature near the Hab, but fuck that. If they’re
            going to blow up, they can blow up a rover, not my house. Then I
            pried out the reaction chamber. It took some work and I cracked the
            damn thing in half, but I got it out. Lucky for me I don’t need a
            proper fuel reaction. In fact, I realy, super-duper don’t want a
            proper fuel reaction. I brought al the Hydrazine and reaction
            chamber in. I briefly considered only having one tank in at a time
            to reduce risk. But some back-of-the-napkin math told me even one
            tank was enough to blow the whole Hab up, so why not bring them al
            in? The tanks have manual vent valves. I’m not 100% sure what
            they’re for. Certainly we were never expected to use them. I think
            they’re there to release pressure during the many quality checks
            done during construction and before fueling. Whatever the reason, I
            have valves to work with. Al it takes is a wrench. I liberated a
            spare water hose from the Water Reclaimer. With some thread torn out
            of a uniform (Sorry, Johanssen), I attached it to the valve output.
            Hydrazine is a liquid, so al I have to do is lead it to the reaction
            chamber (more of a “reaction bowl” now). Meanwhile, the MAV fuel
            plant is stil working. I’ve already brought in one tank of CO2,
            vented it, and returned it for refiling. So there are no more
            excuses. It’s time to start making water. If you find the charred
            remains of the Hab, it means I did something wrong. I’m copying this
            log over to both rovers so it’s more likely it’l survive. Here goes
            nothin’ LOG ENTRY: SOL 33 (2) Wel, I didn’t die. First thing I did
            was put on the inner lining of my EVA suit. Not the bulky suit
            itself, just the inner clothing I wear under it, including the
            gloves and booties. Then I got an oxygen mask from the medical
            supplies and some lab goggles from Vogel's chem kit. Almost al of my
            body was now protected and I would be breathing canned air. Why?
            Because Hydrazine is very toxic. If I breathe too much of it I'l get
            major lung problems. If I get it on my skin, I'l have chemical burns
            for the rest of my life. I wasn't taking any chances. I turned the
            valve until a trickle of Hydrazine came out. I let one drop fal in
            to the iridium bowl. It un-dramaticaly sizzled and disappeared. But
            hey, that’s what I wanted. I just freed up hydrogen and nitrogen.
            Yay! One thing I have in abundance here is bags. They’re not much
            different than kitchen trash bags, though I’m sure they cost $50,000
            because NASA. In addition to being our commander, Lewis was also the
            geologist. She was going to colect rock and soil samples from al
            over the operational area (10 km radius). Weight limits restricted
            how much she could actualy bring back, so she was going to colect
            first, then sort out the most interesting 50kg to take home. The
            bags are to store and tag the samples. Some are smaler than a
            Ziploc, while others are as big as a Hefty lawn and leaf bag. Also,
            I have duct tape. Ordinary duct tape, like you buy at a hardware
            store. Turns out even NASA can’t improve on duct tape. I cut up a
            few Hefty sized bags and taped them together to make a sort of tent.
            Realy it was more of a super-sized bag. I was able to cover the
            whole table where my Hydrazine mad scientist set-up was. I put a few
            knickknacks on the table to keep the plastic out of the iridium
            bowl. Thankfuly, the bags are clear, so I can stil see what’s going
            on. Next, I sacrificed a spacesuit to the cause. I needed an air
            hose. I have a surplus of space suits, after al. A total of seven;
            one for each crewmember and one spare. So I don’t mind murdering one
            of them. I cut a hole in the top of the plastic and duct taped the
            hose in place. Nice seal, I think. With some more string from
            Johannsen’s clothing, I hung the other end of the hose from the top
            of the Hab's dome by two angled threads (to keep them wel clear of
            the hose opening). Now I had a little chimney. The hose was about
            1cm wide. Hopefuly a good aperture. The hydrogen wil be hot after
            the reaction, and it'l want to go up. So I’l let it go up the
            chimney, then burn it as it comes out. Then I had to invent fire.
            NASA put a lot of effort in to making sure nothing here can burn.
            Everything is made of metal or flame retardant plastic and the
            uniforms are synthetic. I needed something that could hold a flame,
            some kind of pilot light. I don't have the skils to keep enough H2
            flowing to feed a flame without kiling myself. Too narrow a margin
            there. After a search of everyone’s personal items (hey, if they
            wanted privacy, they shouldn’t have abandoned me on Mars with their
            stuff) I found my answer. Martinez is a devout catholic. I knew
            that. What I didn’t know was he brought along a smal wooden cross.
            I’m sure NASA gave him shit about it, but I also know Martinez is
            one stubborn son-of-a-bitch. I chipped his sacred religious item
            into long splinters using a pair of pliers and a screwdriver. I
            figure if there’s a God, He won’t mind, considering the situation
            I’m in. Ruining the only religious icon I have leaves me vulnerable
            to Mars Vampires. I’l have to risk it. There were plenty of wires
            and batteries around to make a spark. But you can’t just ignite wood
            with a smal electric spark. So I colected ribbons of bark from local
            palm trees, then got a couple of sticks and rubbed them together to
            create enough friction to… No not realy. I vented pure oxygen at the
            stick and gave it a spark. Fucker lit up like a match. With my
            mini-torch in hand, I started a slow Hydrazine flow. It sizzled on
            the iridium and disappeared. Soon I had short bursts of flame
            sputtering from the chimney. The main thing I had watch was the
            temperature. Hydrazine breaking down is extremely exothermic. So I’d
            do it a bit at a time, constantly watching the readout of a
            thermocouple I’d attached to the iridium chamber. Point is, the
            process worked! Each Hydrazine tank holds a little over 50L, which
            would be enough to make 100L of water. I’m limited by my oxygen
            production, but I’m al excited now, so I'm wiling to use half my
            reserves. Long story short, I’l stop when the tank is half-empty,
            and I’l have 50L or water at the end! LOG ENTRY: SOL 34 Wel that
            took a realy long time. I’ve been at it al night with the Hydrazine.
            But I got the job done. I could have finished faster, but I figured
            caution’s best when setting fire to rocket fuel in an enclosed
            space. Boy is this place a tropical jungle now, I’l tel ya. It’s
            almost 30C in here, and humid as al hel. I just dumped a ton of heat
            and 50L of water in to the air. During this process, the poor Hab
            had to be the mother of a messy toddler. It’s been replacing the
            oxygen I’ve used, and the Water Reclaimer is trying to get the
            humidity down to sane levels. Nothing to be done about the heat.
            There’s actualy no air-conditioning in the Hab. Mars is cold.
            Getting rid of excess heat isn’t something we expected to deal with.
            I’ve now grown accustomed to the alarms that are blaring at al
            times. The fire alarm has finaly stopped, now that there’s no more
            fire. The low oxygen alarm should stop soon. The high humidity alarm
            wil take a little longer. The Water Reclaimer has its work cut out
            for it today. For a moment, there yet another alarm. The Water
            Reclaimer’s main tank was ful. Booyah! That’s the kind of problem I
            want to have! Remember the spacesuit I vandalized yesterday? I hung
            it on its rack and carried buckets of water to it from the
            reclaimer. It can hold an atmosphere of air in. It should be able to
            handle a few buckets of water. Man I’m tired. Been up al night and
            it’s time to sleep. But I’l drift off to dreamland in the best mood
            I’ve been in since Sol 6. Things are finaly going my way. In fact,
            they’re going great! I have a chance to live after al! LOG ENTRY:
            SOL 37 I am fucked and I’m gonna die! Ok, calm down. I’m sure I can
            get around this. I’m writing this log to you, dear future Mars
            archeologist, from Rover 2. You may wonder why I’m not in the Hab
            right now. Because I fled in terror, that’s why! And I’m not sure
            what the hel to do next. I guess I should explain what happened. If
            this is my last entry, you’l at least know why. Over the past few
            days, I've been happily making water. It’s been going swimmingly.
            (See what I did there? “swimmingly”) I even beefed up the MAV fuel
            plant compressor. It was very technical (I increased the voltage to
            the pump). So I’m making water even faster now. After my initial
            burst of 50L, I decided to settle down and just make it at the rate
            I get O2. I’m not wiling to go below a 25L reserve. So when I dip
            too low, I stop dicking with Hydrazine until I get the O2 back up to
            wel above 25L. Important note: When I say I made 50L of water, that
            was an assumption. I didn’t *reclaim* 50L of water. The additional
            soil I’d filed the Hab with was extremely dry and greedily sucked up
            a lot of the humidity. That’s where I want the water to go anyway,
            so I’m not worried, and I wasn’t surprised when the reclaimer didn’t
            get anywhere near 50L. I get 10L of CO2 every 15 hours now that I
            souped up the pump. I’ve done this process four times. My math tels
            me that, including my initial 50L burst, I should have 130L of water
            added to the system. Wel my math is a damn liar! I’ve gained 70L in
            the water regulator and the spacesuit-now-watertank. There’s plenty
            of condensation on the wals and domed roof, and the soil is
            certainly absorbing its fair share. But that doesn’t account for 60L
            of missing water. Something was wrong. That’s when I noticed the
            other O2 tank. The Hab has two reserve O2 tanks. One on each side of
            the structure, for safety reasons. The Hab can decide which one to
            use whenever it wants. Turns out it’s been topping off the
            atmosphere from Tank 1. But when I add O2 to the system (via the
            Oxygenator), the Hab evenly distributes the gain among the two
            tanks. Tank 2 has been slowly gaining oxygen. That’s not a problem,
            it’s just doing its job. But it does mean I’ve been gaining O2 over
            time. Which means I’m not consuming it as fast as I thought. At
            first, I thought “Yay! More oxygen! Now I can make water faster!”
            But then a more disturbing thought occurred to me. Folow my logic:
            I’m gaining O2. But the amount I’m bringing in from outside is
            constant. So the only way to “gain” it is to be using less than I
            thought. But I’ve been doing the Hydrazine reaction with the
            assumption that I was using al of it. The only possible explanation
            is I haven’t been burning al the released hydrogen. It’s obvious
            now, in retrospect. But it never occurred to me that some of the
            hydrogen just wouldn’t burn. It got past the flame, and went on its
            merry way. Dammit, Jim, I’m a botanist, not a chemist! Chemistry is
            messy, so there's unburned Hydrogen in the air. Al around me. Mixed
            in with the oxygen. Just... hanging out. Waiting for a spark so it
            can blow the fucking Hab up! Once I figured this out, and composed
            myself, I got a Ziploc-sized sample bag and waved it around a bit,
            then sealed it. Then, a quick EVA to a rover, where we keep the
            atmospheric analyzers. Nitrogen: 22%. Oxygen: 9%. Hydrogen: 64%.
            I’ve been hiding here in the rover ever since. It’s Hydrogenvile in
            the Hab. I’m very lucky it hasn’t blown. Even a smal static
            discharge would have led to “Oh the humanity!” So, I’m here in Rover
            2. I can stay for a day or two, tops, before the CO2 filters from
            the rover and my spacesuit fil up. I have that long to figure out
            how to deal with this. The Hab is now a bomb. Chapter 5 LOG ENTRY:
            SOL 38 I’m stil cowering in the rover, but I’ve had time to think.
            And I know how to deal with the hydrogen. I thought about the
            Atmospheric Regulator. It pays attention to what’s in the air and
            balances it. That’s how the excess O2 I've been importing ends up in
            the tanks. Problem is, it’s just not built to pul hydrogen out of
            the air. The regulator uses freeze-separation to sort out the
            gasses. When it decides there’s too much oxygen, it starts colecting
            air in a tank and cooling it to 90 kelvin. That makes the oxygen
            turn to liquid, but leaves the nitrogen (condensation point: 77K)
            stil gaseous. Then it stores the O2. But I can’t get it to do that
            for hydrogen, because hydrogen needs to be below 21K to turn liquid.
            And the regulator just can’t get temperatures that low. Dead end.
          </Box>
        </Box>
      </Box>
      <Box className={styles.suggestions}>Some info</Box>
    </Box>
  );
};

export default Details;
