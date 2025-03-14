const chalk = require('chalk');
const fs = require('fs');

global.allMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *GROUP MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}pushcontact
┃ ❏ ─· ${p}savecontact
┃ ❏ ─· ${p}sendcontact
┃ ❏ ─· ${p}getcontact
┃ ❏ ─· ${p}contacttag
┃ ❏ ─· ${p}antibadword
┃ ❏ ─· ${p}nsfw
┃ ❏ ─· ${p}antiaudio
┃ ❏ ─· ${p}antiforeign
┃ ❏ ─· ${p}antisticker
┃ ❏ ─· ${p}antiimage
┃ ❏ ─· ${p}antivideo
┃ ❏ ─· ${p}antiviewonce
┃ ❏ ─· ${p}antispam
┃ ❏ ─· ${p}antimedia
┃ ❏ ─· ${p}antidocument
┃ ❏ ─· ${p}anticontact
┃ ❏ ─· ${p}antilocation
┃ ❏ ─· ${p}antilocation
┃ ❏ ─· ${p}antilink
┃ ❏ ─· ${p}antilinkgc
┃ ❏ ─· ${p}groupinfo
┃ ❏ ─· ${p}mute
┃ ❏ ─· ${p}welcome
┃ ❏ ─· ${p}left
┃ ❏ ─· ${p}adminevent
┃ ❏ ─· ${p}groupevent
┃ ❏ ─· ${p}kick
┃ ❏ ─· ${p}add
┃ ❏ ─· ${p}promote
┃ ❏ ─· ${p}demote
┃ ❏ ─· ${p}setnamegc
┃ ❏ ─· ${p}setppgc
┃ ❏ ─· ${p}deleteppgc
┃ ❏ ─· ${p}setdesk
┃ ❏ ─· ${p}hidetag
┃ ❏ ─· ${p}tagall
┃ ❏ ─· ${p}listonline
┃ ❏ ─· ${p}group
┃ ❏ ─· ${p}editinfo
┃ ❏ ─· ${p}linkgc
┃ ❏ ─· ${p}resetlink
┃ ❏ ─· ${p}afk
┃ ❏ ─· ${p}addlist
┃ ❏ ─· ${p}dellist
┃ ❏ ─· ${p}ceklist
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *SEARCH MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}anime
┃ ❏ ─· ${p}kusonimeinfo
┃ ❏ ─· ${p}kusonimesearch
┃ ❏ ─· ${p}otakudesu
┃ ❏ ─· ${p}jkt48news
┃ ❏ ─· ${p}mangainfo
┃ ❏ ─· ${p}mangadetail
┃ ❏ ─· ${p}imdb
┃ ❏ ─· ${p}bukalapak
┃ ❏ ─· ${p}playstore
┃ ❏ ─· ${p}umma
┃ ❏ ─· ${p}happymod
┃ ❏ ─· ${p}ytsearch
┃ ❏ ─· ${p}tiktoksearch
┃ ❏ ─· ${p}pinterest
┃ ❏ ─· ${p}wallpaper
┃ ❏ ─· ${p}wikipedia
┃ ❏ ─· ${p}wikimedia
┃ ❏ ─· ${p}ringtone
┃ ❏ ─· ${p}traceanime
┃ ❏ ─· ${p}weather
┃ ❏ ─· ${p}presetam
┃ ❏ ─· ${p}soundcloud
┃ ❏ ─· ${p}lyrics
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *DOWNLOAD MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}play
┃ ❏ ─· ${p}ytaudio
┃ ❏ ─· ${p}ytvideo
┃ ❏ ─· ${p}tiktokmp4
┃ ❏ ─· ${p}tiktokmp3
┃ ❏ ─· ${p}tiktokslide
┃ ❏ ─· ${p}instagram
┃ ❏ ─· ${p}facebook
┃ ❏ ─· ${p}fdown
┃ ❏ ─· ${p}gitclone
┃ ❏ ─· ${p}gdrive
┃ ❏ ─· ${p}savepin
┃ ❏ ─· ${p}mediafire
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *CONVERTER/TOOLS* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}brat
┃ ❏ ─· ${p}ssweb
┃ ❏ ─· ${p}qc
┃ ❏ ─· ${p}s
┃ ❏ ─· ${p}swm
┃ ❏ ─· ${p}tourl
┃ ❏ ─· ${p}toimage
┃ ❏ ─· ${p}remini
┃ ❏ ─· ${p}upscale
┃ ❏ ─· ${p}fetch
┃ ❏ ─· ${p}toaudio
┃ ❏ ─· ${p}bass
┃ ❏ ─· ${p}blown
┃ ❏ ─· ${p}deep
┃ ❏ ─· ${p}earrape
┃ ❏ ─· ${p}fast
┃ ❏ ─· ${p}fat
┃ ❏ ─· ${p}nightcore
┃ ❏ ─· ${p}reverse
┃ ❏ ─· ${p}robot
┃ ❏ ─· ${p}slow
┃ ❏ ─· ${p}smooth
┃ ❏ ─· ${p}squirrel
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *STORE MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}updatelist
┃ ❏ ─· ${p}jpm
┃ ❏ ─· ${p}jpm2
┃ ❏ ─· ${p}addlist
┃ ❏ ─· ${p}dellist
┃ ❏ ─· ${p}store
┃ ❏ ─· ${p}list
┃ ❏ ─· ${p}bagi
┃ ❏ ─· ${p}kali
┃ ❏ ─· ${p}kurang
┃ ❏ ─· ${p}tambah
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *PANEL MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}addserver
┃ ❏ ─· ${p}adduser
┃ ❏ ─· ${p}listserver
┃ ❏ ─· ${p}listuser
┃ ❏ ─· ${p}adduseradmin
┃ ❏ ─· ${p}restartserver
┃ ❏ ─· ${p}stopserver
┃ ❏ ─· ${p}startserver
┃ ❏ ─· ${p}deluser
┃ ❏ ─· ${p}delserver
┃ ❏ ─· ${p}1gb ~ 50gb
┃ ❏ ─· ${p}unli
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *GAME MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}tebakkabupaten
┃ ❏ ─· ${p}tebakjkt48
┃ ❏ ─· ${p}tebakhewan
┃ ❏ ─· ${p}tebakml
┃ ❏ ─· ${p}tebakchara
┃ ❏ ─· ${p}tebaklogo
┃ ❏ ─· ${p}tebakaplikasi
┃ ❏ ─· ${p}tebakff
┃ ❏ ─· ${p}tebakhero
┃ ❏ ─· ${p}tebakgame
┃ ❏ ─· ${p}tebakgambar
┃ ❏ ─· ${p}tebakbendera
┃ ❏ ─· ${p}lengkapikalimat
┃ ❏ ─· ${p}asahotak
┃ ❏ ─· ${p}tebakkata
┃ ❏ ─· ${p}tebaktebakan
┃ ❏ ─· ${p}tebaklirik
┃ ❏ ─· ${p}tebakkimia
┃ ❏ ─· ${p}tebaksiapa
┃ ❏ ─· ${p}tebakkalimat
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *FUN MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}checkme
┃ ❏ ─· ${p}mitos
┃ ❏ ─· ${p}faktaunik
┃ ❏ ─· ${p}faktakucing
┃ ❏ ─· ${p}joke
┃ ❏ ─· ${p}suit
┃ ❏ ─· ${p}cekganteng
┃ ❏ ─· ${p}cekcantik
┃ ❏ ─· ${p}cekimut
┃ ❏ ─· ${p}cekjomok
┃ ❏ ─· ${p}cekwaifu
┃ ❏ ─· ${p}cekkpribadian
┃ ❏ ─· ${p}cekmasadepan
┃ ❏ ─· ${p}quotesgalau
┃ ❏ ─· ${p}truth
┃ ❏ ─· ${p}dare
┃ ❏ ─· ${p}apakah
┃ ❏ ─· ${p}bisakah
┃ ❏ ─· ${p}kapankah
┃ ❏ ─· ${p}dimana
┃ ❏ ─· ${p}bagaimana
┃ ❏ ─· ${p}rate
┃ ❏ ─· ${p}soulmate
┃ ❏ ─· ${p}couple
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *RANDOM ANIME MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}akira
┃ ❏ ─· ${p}akiyama
┃ ❏ ─· ${p}ana
┃ ❏ ─· ${p}art
┃ ❏ ─· ${p}asuna
┃ ❏ ─· ${p}ayuzawa
┃ ❏ ─· ${p}boruto
┃ ❏ ─· ${p}bts
┃ ❏ ─· ${p}chiho
┃ ❏ ─· ${p}chitoge
┃ ❏ ─· ${p}cosplay
┃ ❏ ─· ${p}cosplayloli
┃ ❏ ─· ${p}cosplaysagiri
┃ ❏ ─· ${p}cyber
┃ ❏ ─· ${p}deidara
┃ ❏ ─· ${p}doraemon
┃ ❏ ─· ${p}elaina
┃ ❏ ─· ${p}emilia
┃ ❏ ─· ${p}erza
┃ ❏ ─· ${p}exo
┃ ❏ ─· ${p}gamewallpaper
┃ ❏ ─· ${p}gremory
┃ ❏ ─· ${p}hacker
┃ ❏ ─· ${p}hestia
┃ ❏ ─· ${p}husbu
┃ ❏ ─· ${p}inori
┃ ❏ ─· ${p}islamic
┃ ❏ ─· ${p}isuzu
┃ ❏ ─· ${p}itachi
┃ ❏ ─· ${p}itori
┃ ❏ ─· ${p}jennie
┃ ❏ ─· ${p}jiso
┃ ❏ ─· ${p}justina
┃ ❏ ─· ${p}kaga
┃ ❏ ─· ${p}kagura
┃ ❏ ─· ${p}kakasih
┃ ❏ ─· ${p}kaori
┃ ❏ ─· ${p}cartoon
┃ ❏ ─· ${p}shortquote
┃ ❏ ─· ${p}keneki
┃ ❏ ─· ${p}kotori
┃ ❏ ─· ${p}kurumi
┃ ❏ ─· ${p}lisa
┃ ❏ ─· ${p}loli2
┃ ❏ ─· ${p}madara
┃ ❏ ─· ${p}megumin
┃ ❏ ─· ${p}mikasa
┃ ❏ ─· ${p}mikey
┃ ❏ ─· ${p}miku
┃ ❏ ─· ${p}minato
┃ ❏ ─· ${p}mountain
┃ ❏ ─· ${p}naruto
┃ ❏ ─· ${p}nekonime
┃ ❏ ─· ${p}nezuko
┃ ❏ ─· ${p}onepiece
┃ ❏ ─· ${p}pentol
┃ ❏ ─· ${p}pokemon
┃ ❏ ─· ${p}programming
┃ ❏ ─· ${p}randomnime
┃ ❏ ─· ${p}randomnime2
┃ ❏ ─· ${p}rize
┃ ❏ ─· ${p}rose
┃ ❏ ─· ${p}sagiri
┃ ❏ ─· ${p}sakura
┃ ❏ ─· ${p}sasuke
┃ ❏ ─· ${p}satanic
┃ ❏ ─· ${p}shina
┃ ❏ ─· ${p}shinka
┃ ❏ ─· ${p}shinomiya
┃ ❏ ─· ${p}shizuka
┃ ❏ ─· ${p}shota
┃ ❏ ─· ${p}space
┃ ❏ ─· ${p}technology
┃ ❏ ─· ${p}tejina
┃ ❏ ─· ${p}toukachan
┃ ❏ ─· ${p}tsunade
┃ ❏ ─· ${p}waifu2
┃ ❏ ─· ${p}yotsuba
┃ ❏ ─· ${p}yuki
┃ ❏ ─· ${p}yulibocil
┃ ❏ ─· ${p}yumeko
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *BUG MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}xandroid
┃ ❏ ─· ${p}xandroid2
┃ ❏ ─· ${p}xios
┃ ❏ ─· ${p}xios2
┃ ❏ ─· ${p}xgc
┃ ❏ ─· ${p}systemuicrash
┃ ❏ ─· ${p}xsysui
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *RPG MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}daily
┃ ❏ ─· ${p}crafting
┃ ❏ ─· ${p}heal
┃ ❏ ─· ${p}joinrpg
┃ ❏ ─· ${p}kerja
┃ ❏ ─· ${p}merampok
┃ ❏ ─· ${p}memancing
┃ ❏ ─· ${p}repair
┃ ❏ ─· ${p}adventure
┃ ❏ ─· ${p}mining
┃ ❏ ─· ${p}jual
┃ ❏ ─· ${p}beli
┃ ❏ ─· ${p}berburu
┃ ❏ ─· ${p}nebang
┃ ❏ ─· ${p}berlayar
┃ ❏ ─· ${p}inventory
┃ ❏ ─· ${p}redeemdel
┃ ❏ ─· ${p}redeemset
┃ ❏ ─· ${p}redeem
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. PRIVACY MENU ໒  ֵ  ׄ
┃ ❏ ─· ${p}setcallprivacy
┃ ❏ ─· ${p}setlastprivacy
┃ ❏ ─· ${p}setonlineprivacy
┃ ❏ ─· ${p}setprofileprivacy
┃ ❏ ─· ${p}setstatusprivacy
┃ ❏ ─· ${p}setreadreceiptsprivacy
┃ ❏ ─· ${p}setreactionmode
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. NEWSLETTER MENU ໒  ֵ  ׄ
┃ ❏ ─· ${p}setnewsletterdesc
┃ ❏ ─· ${p}setnewslettername
┃ ❏ ─· ${p}setnewsletterpic
┃ ❏ ─· ${p}follownewsletter
┃ ❏ ─· ${p}unfollownewsletter
┃ ❏ ─· ${p}mutenewsletter
┃ ❏ ─· ${p}unmutenewsletter
┃ ❏ ─· ${p}createnewsletter
┃ ❏ ─· ${p}newsletterinfo
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *AI MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}deepseek
┃ ❏ ─· ${p}dreamshaper
┃ ❏ ─· ${p}flux
┃ ❏ ─· ${p}felo
┃ ❏ ─· ${p}gandalf
┃ ❏ ─· ${p}gemini
┃ ❏ ─· ${p}gemma
┃ ❏ ─· ${p}gpt3
┃ ❏ ─· ${p}gita
┃ ❏ ─· ${p}naw
┃ ❏ ─· ${p}muslimai
┃ ❏ ─· ${p}mistral7b
┃ ❏ ─· ${p}metaai
┃ ❏ ─· ${p}blackboxai
┃ ❏ ─· ${p}claudeai
┃ ❏ ─· ${p}jokoai
┃ ❏ ─· ${p}aishepherd
┃ ❏ ─· ${p}bardai
┃ ❏ ─· ${p}bibleai
┃ ❏ ─· ${p}blackboxai-pro
┃ ❏ ─· ${p}claude-sonnet
┃ ❏ ─· ${p}dbrx-instruct
┃ ❏ ─· ${p}deepseek-llm
┃ ❏ ─· ${p}dreamshaper
┃ ❏ ─· ${p}flux
┃ ❏ ─· ${p}felo
┃ ❏ ─· ${p}gandalf
┃ ❏ ─· ${p}gemini-pro
┃ ❏ ─· ${p}gpt3
┃ ❏ ─· ${p}gita
┃ ❏ ─· ${p}naw
╰──────────── •

╭─ׁ ࣪ ִֶָ☾. *OTHERS MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}daftar
┃ ❏ ─· ${p}unreg
┃ ❏ ─· ${p}ping
┃ ❏ ─· ${p}ipwhois
┃ ❏ ─· ${p}country
┃ ❏ ─· ${p}dns
┃ ❏ ─· ${p}speedtest
┃ ❏ ─· ${p}otakudesu
┃ ❏ ─· ${p}gempa
┃ ❏ ─· ${p}quotesanime
┃ ❏ ─· ${p}githubstalk
┃ ❏ ─· ${p}npmstalk
┃ ❏ ─· ${p}mlstalk
┃ ❏ ─· ${p}runtime
┃ ❏ ─· ${p}donate
┃ ❏ ─· ${p}script
┃ ❏ ─· ${p}repository
┃ ❏ ─· ${p}infobot
┃ ❏ ─· ${p}owner
┃ ❏ ─· ${p}addsubdo
┃ ❏ ─· ${p}delsubdo
┃ ❏ ─· ${p}listsubdo
┃ ❏ ─· ${p}jadibot
┃ ❏ ─· ${p}stopjadibot
┃ ❏ ─· ${p}listjadibot
╰──────────── •
`}

global.ownerMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *OWNER MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}backup
┃ ❏ ─· ${p}addbadword
┃ ❏ ─· ${p}delbadword
┃ ❏ ─· ${p}listbadword
┃ ❏ ─· ${p}resetdbuser
┃ ❏ ─· ${p}resethit
┃ ❏ ─· ${p}setmenu
┃ ❏ ─· ${p}setreply
┃ ❏ ─· ${p}statustext
┃ ❏ ─· ${p}statusvideo
┃ ❏ ─· ${p}statusimage
┃ ❏ ─· ${p}statusaudio
┃ ❏ ─· ${p}upsaluran
┃ ❏ ─· ${p}setimgmenu
┃ ❏ ─· ${p}setvidmenu
┃ ❏ ─· ${p}addtitle
┃ ❏ ─· ${p}deltitle
┃ ❏ ─· ${p}addlimit
┃ ❏ ─· ${p}dellimit
┃ ❏ ─· ${p}resetlimit
┃ ❏ ─· ${p}resetdblimit
┃ ❏ ─· ${p}adduang
┃ ❏ ─· ${p}deluang
┃ ❏ ─· ${p}resetuang
┃ ❏ ─· ${p}resetdbmoney
┃ ❏ ─· ${p}addpremium
┃ ❏ ─· ${p}delpremium
┃ ❏ ─· ${p}listpremium
┃ ❏ ─· ${p}addowner
┃ ❏ ─· ${p}delowner
┃ ❏ ─· ${p}clearsession
┃ ❏ ─· ${p}clearmedia
┃ ❏ ─· ${p}joingroup
┃ ❏ ─· ${p}outgroup
┃ ❏ ─· ${p}joinchannel
┃ ❏ ─· ${p}outchannel
┃ ❏ ─· ${p}getsession
┃ ❏ ─· ${p}myip
┃ ❏ ─· ${p}shutdown
┃ ❏ ─· ${p}restart
┃ ❏ ─· ${p}kill
┃ ❏ ─· ${p}autoread
┃ ❏ ─· ${p}unavailable
┃ ❏ ─· ${p}autorecordtype
┃ ❏ ─· ${p}autorecord
┃ ❏ ─· ${p}autotype
┃ ❏ ─· ${p}autobio
┃ ❏ ─· ${p}autosticker
┃ ❏ ─· ${p}safesearch
┃ ❏ ─· ${p}autodownload
┃ ❏ ─· ${p}autoblock
┃ ❏ ─· ${p}onlygc
┃ ❏ ─· ${p}onlypc
┃ ❏ ─· ${p}self
┃ ❏ ─· ${p}public
┃ ❏ ─· ${p}setexif
┃ ❏ ─· ${p}setprefix
┃ ❏ ─· ${p}setautoblock
┃ ❏ ─· ${p}setantiforeign
┃ ❏ ─· ${p}pushcontact
┃ ❏ ─· ${p}savecontact
┃ ❏ ─· ${p}sendcontact
┃ ❏ ─· ${p}getcontact
┃ ❏ ─· ${p}contacttag
┃ ❏ ─· ${p}ban
┃ ❏ ─· ${p}unban
┃ ❏ ─· ${p}getcase
┃ ❏ ─· ${p}setppbot
┃ ❏ ─· ${p}deleteppbot
┃ ❏ ─· ${p}setbiobot
┃ ❏ ─· ${p}listpc
┃ ❏ ─· ${p}listgc
┃ ❏ ─· ${p}creategc
┃ ❏ ─· ${p}autoswview
┃ ❏ ─· ${p}anticall
┃ ❏ ─· ${p}addvideo
┃ ❏ ─· ${p}delvideo
┃ ❏ ─· ${p}listvideo
┃ ❏ ─· ${p}addimage
┃ ❏ ─· ${p}delimage
┃ ❏ ─· ${p}listimage
┃ ❏ ─· ${p}addsticker
┃ ❏ ─· ${p}delsticker
┃ ❏ ─· ${p}liststicker
┃ ❏ ─· ${p}addaudio
┃ ❏ ─· ${p}delaudio
┃ ❏ ─· ${p}listaudio
┃ ❏ ─· ${p}addlist
┃ ❏ ─· ${p}dellist
┃ ❏ ─· ${p}ceklist
╰──────────── •
`}

global.groupMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *GROUP MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}pushcontact
┃ ❏ ─· ${p}savecontact
┃ ❏ ─· ${p}sendcontact
┃ ❏ ─· ${p}getcontact
┃ ❏ ─· ${p}contacttag
┃ ❏ ─· ${p}antibadword
┃ ❏ ─· ${p}nsfw
┃ ❏ ─· ${p}antiaudio
┃ ❏ ─· ${p}antiforeign
┃ ❏ ─· ${p}antisticker
┃ ❏ ─· ${p}antiimage
┃ ❏ ─· ${p}antivideo
┃ ❏ ─· ${p}antiviewonce
┃ ❏ ─· ${p}antispam
┃ ❏ ─· ${p}antimedia
┃ ❏ ─· ${p}antidocument
┃ ❏ ─· ${p}anticontact
┃ ❏ ─· ${p}antilocation
┃ ❏ ─· ${p}antilocation
┃ ❏ ─· ${p}antilink
┃ ❏ ─· ${p}antilinkgc
┃ ❏ ─· ${p}groupinfo
┃ ❏ ─· ${p}mute
┃ ❏ ─· ${p}welcome
┃ ❏ ─· ${p}left
┃ ❏ ─· ${p}adminevent
┃ ❏ ─· ${p}groupevent
┃ ❏ ─· ${p}kick
┃ ❏ ─· ${p}add
┃ ❏ ─· ${p}promote
┃ ❏ ─· ${p}demote
┃ ❏ ─· ${p}setnamegc
┃ ❏ ─· ${p}setppgc
┃ ❏ ─· ${p}deleteppgc
┃ ❏ ─· ${p}setdesk
┃ ❏ ─· ${p}hidetag
┃ ❏ ─· ${p}tagall
┃ ❏ ─· ${p}listonline
┃ ❏ ─· ${p}group
┃ ❏ ─· ${p}editinfo
┃ ❏ ─· ${p}linkgc
┃ ❏ ─· ${p}resetlink
┃ ❏ ─· ${p}afk
┃ ❏ ─· ${p}addlist
┃ ❏ ─· ${p}dellist
┃ ❏ ─· ${p}ceklist
╰──────────── •
`}

global.searchMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *SEARCH MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}anime
┃ ❏ ─· ${p}kusonimeinfo
┃ ❏ ─· ${p}kusonimesearch
┃ ❏ ─· ${p}otakudesu
┃ ❏ ─· ${p}jkt48news
┃ ❏ ─· ${p}mangainfo
┃ ❏ ─· ${p}mangadetail
┃ ❏ ─· ${p}imdb
┃ ❏ ─· ${p}bukalapak
┃ ❏ ─· ${p}playstore
┃ ❏ ─· ${p}umma
┃ ❏ ─· ${p}happymod
┃ ❏ ─· ${p}ytsearch
┃ ❏ ─· ${p}tiktoksearch
┃ ❏ ─· ${p}pinterest
┃ ❏ ─· ${p}wallpaper
┃ ❏ ─· ${p}wikipedia
┃ ❏ ─· ${p}wikimedia
┃ ❏ ─· ${p}ringtone
┃ ❏ ─· ${p}traceanime
┃ ❏ ─· ${p}weather
┃ ❏ ─· ${p}presetam
┃ ❏ ─· ${p}soundcloud
┃ ❏ ─· ${p}lyrics
╰──────────── •
`}

global.downloadMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *DOWNLOAD MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}play
┃ ❏ ─· ${p}ytaudio
┃ ❏ ─· ${p}ytvideo
┃ ❏ ─· ${p}tiktokmp4
┃ ❏ ─· ${p}tiktokmp3
┃ ❏ ─· ${p}tiktokslide
┃ ❏ ─· ${p}instagram
┃ ❏ ─· ${p}facebook
┃ ❏ ─· ${p}fdown
┃ ❏ ─· ${p}gitclone
┃ ❏ ─· ${p}gdrive
┃ ❏ ─· ${p}savepin
┃ ❏ ─· ${p}mediafire
╰──────────── •
`}

global.convertMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *CONVERTER/TOOLS* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}brat
┃ ❏ ─· ${p}ssweb
┃ ❏ ─· ${p}qc
┃ ❏ ─· ${p}s
┃ ❏ ─· ${p}swm
┃ ❏ ─· ${p}tourl
┃ ❏ ─· ${p}toimage
┃ ❏ ─· ${p}remini
┃ ❏ ─· ${p}fetch
┃ ❏ ─· ${p}toaudio
┃ ❏ ─· ${p}bass
┃ ❏ ─· ${p}blown
┃ ❏ ─· ${p}deep
┃ ❏ ─· ${p}earrape
┃ ❏ ─· ${p}fast
┃ ❏ ─· ${p}fat
┃ ❏ ─· ${p}nightcore
┃ ❏ ─· ${p}reverse
┃ ❏ ─· ${p}robot
┃ ❏ ─· ${p}slow
┃ ❏ ─· ${p}smooth
┃ ❏ ─· ${p}squirrel
╰──────────── •
`}

global.storeMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *STORE MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}updatelist
┃ ❏ ─· ${p}jpm
┃ ❏ ─· ${p}jpm2
┃ ❏ ─· ${p}addlist
┃ ❏ ─· ${p}dellist
┃ ❏ ─· ${p}store
┃ ❏ ─· ${p}list
┃ ❏ ─· ${p}bagi
┃ ❏ ─· ${p}kali
┃ ❏ ─· ${p}kurang
┃ ❏ ─· ${p}tambah
╰──────────── •
`}

global.panelMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *PANEL MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}addserver
┃ ❏ ─· ${p}adduser
┃ ❏ ─· ${p}listserver
┃ ❏ ─· ${p}listuser
┃ ❏ ─· ${p}adduseradmin
┃ ❏ ─· ${p}restartserver
┃ ❏ ─· ${p}stopserver
┃ ❏ ─· ${p}startserver
┃ ❏ ─· ${p}deluser
┃ ❏ ─· ${p}delserver
┃ ❏ ─· ${p}1gb ~ 50gb
┃ ❏ ─· ${p}unli
╰──────────── •
`}

global.gameMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *GAME MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}tebakkabupaten
┃ ❏ ─· ${p}tebakjkt48
┃ ❏ ─· ${p}tebakhewan
┃ ❏ ─· ${p}tebakml
┃ ❏ ─· ${p}tebakchara
┃ ❏ ─· ${p}tebaklogo
┃ ❏ ─· ${p}tebakaplikasi
┃ ❏ ─· ${p}tebakff
┃ ❏ ─· ${p}tebakhero
┃ ❏ ─· ${p}tebakgame
┃ ❏ ─· ${p}tebakgambar
┃ ❏ ─· ${p}tebakbendera
┃ ❏ ─· ${p}lengkapikalimat
┃ ❏ ─· ${p}asahotak
┃ ❏ ─· ${p}tebakkata
┃ ❏ ─· ${p}tebaktebakan
┃ ❏ ─· ${p}tebaklirik
┃ ❏ ─· ${p}tebakkimia
┃ ❏ ─· ${p}tebaksiapa
┃ ❏ ─· ${p}tebakkalimat
╰──────────── •
`}

global.funMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *FUN MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}checkme
┃ ❏ ─· ${p}mitos
┃ ❏ ─· ${p}faktaunik
┃ ❏ ─· ${p}faktakucing
┃ ❏ ─· ${p}joke
┃ ❏ ─· ${p}suit
┃ ❏ ─· ${p}cekganteng
┃ ❏ ─· ${p}cekcantik
┃ ❏ ─· ${p}cekimut
┃ ❏ ─· ${p}cekjomok
┃ ❏ ─· ${p}cekwaifu
┃ ❏ ─· ${p}cekkpribadian
┃ ❏ ─· ${p}cekmasadepan
┃ ❏ ─· ${p}quotesgalau
┃ ❏ ─· ${p}truth
┃ ❏ ─· ${p}dare
┃ ❏ ─· ${p}apakah
┃ ❏ ─· ${p}bisakah
┃ ❏ ─· ${p}kapankah
┃ ❏ ─· ${p}dimana
┃ ❏ ─· ${p}bagaimana
┃ ❏ ─· ${p}rate
┃ ❏ ─· ${p}soulmate
┃ ❏ ─· ${p}couple
╰──────────── •
`}

global.randomAnimeMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *RANDOM ANIME MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}akira
┃ ❏ ─· ${p}akiyama
┃ ❏ ─· ${p}ana
┃ ❏ ─· ${p}art
┃ ❏ ─· ${p}asuna
┃ ❏ ─· ${p}ayuzawa
┃ ❏ ─· ${p}boruto
┃ ❏ ─· ${p}bts
┃ ❏ ─· ${p}chiho
┃ ❏ ─· ${p}chitoge
┃ ❏ ─· ${p}cosplay
┃ ❏ ─· ${p}cosplayloli
┃ ❏ ─· ${p}cosplaysagiri
┃ ❏ ─· ${p}cyber
┃ ❏ ─· ${p}deidara
┃ ❏ ─· ${p}doraemon
┃ ❏ ─· ${p}elaina
┃ ❏ ─· ${p}emilia
┃ ❏ ─· ${p}erza
┃ ❏ ─· ${p}exo
┃ ❏ ─· ${p}gamewallpaper
┃ ❏ ─· ${p}gremory
┃ ❏ ─· ${p}hacker
┃ ❏ ─· ${p}hestia
┃ ❏ ─· ${p}husbu
┃ ❏ ─· ${p}inori
┃ ❏ ─· ${p}islamic
┃ ❏ ─· ${p}isuzu
┃ ❏ ─· ${p}itachi
┃ ❏ ─· ${p}itori
┃ ❏ ─· ${p}jennie
┃ ❏ ─· ${p}jiso
┃ ❏ ─· ${p}justina
┃ ❏ ─· ${p}kaga
┃ ❏ ─· ${p}kagura
┃ ❏ ─· ${p}kakasih
┃ ❏ ─· ${p}kaori
┃ ❏ ─· ${p}cartoon
┃ ❏ ─· ${p}shortquote
┃ ❏ ─· ${p}keneki
┃ ❏ ─· ${p}kotori
┃ ❏ ─· ${p}kurumi
┃ ❏ ─· ${p}lisa
┃ ❏ ─· ${p}loli2
┃ ❏ ─· ${p}madara
┃ ❏ ─· ${p}megumin
┃ ❏ ─· ${p}mikasa
┃ ❏ ─· ${p}mikey
┃ ❏ ─· ${p}miku
┃ ❏ ─· ${p}minato
┃ ❏ ─· ${p}mountain
┃ ❏ ─· ${p}naruto
┃ ❏ ─· ${p}nekonime
┃ ❏ ─· ${p}nezuko
┃ ❏ ─· ${p}onepiece
┃ ❏ ─· ${p}pentol
┃ ❏ ─· ${p}pokemon
┃ ❏ ─· ${p}programming
┃ ❏ ─· ${p}randomnime
┃ ❏ ─· ${p}randomnime2
┃ ❏ ─· ${p}rize
┃ ❏ ─· ${p}rose
┃ ❏ ─· ${p}sagiri
┃ ❏ ─· ${p}sakura
┃ ❏ ─· ${p}sasuke
┃ ❏ ─· ${p}satanic
┃ ❏ ─· ${p}shina
┃ ❏ ─· ${p}shinka
┃ ❏ ─· ${p}shinomiya
┃ ❏ ─· ${p}shizuka
┃ ❏ ─· ${p}shota
┃ ❏ ─· ${p}space
┃ ❏ ─· ${p}technology
┃ ❏ ─· ${p}tejina
┃ ❏ ─· ${p}toukachan
┃ ❏ ─· ${p}tsunade
┃ ❏ ─· ${p}waifu2
┃ ❏ ─· ${p}yotsuba
┃ ❏ ─· ${p}yuki
┃ ❏ ─· ${p}yulibocil
┃ ❏ ─· ${p}yumeko
╰──────────── •
`}

global.bugMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *BUG MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}xandroid
┃ ❏ ─· ${p}xandroid2
┃ ❏ ─· ${p}xios
┃ ❏ ─· ${p}xios2
┃ ❏ ─· ${p}xgc
┃ ❏ ─· ${p}systemuicrash
┃ ❏ ─· ${p}xsysui
╰──────────── •
`}

global.rpgMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *RPG MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}daily
┃ ❏ ─· ${p}crafting
┃ ❏ ─· ${p}heal
┃ ❏ ─· ${p}joinrpg
┃ ❏ ─· ${p}kerja
┃ ❏ ─· ${p}merampok
┃ ❏ ─· ${p}memancing
┃ ❏ ─· ${p}repair
┃ ❏ ─· ${p}adventure
┃ ❏ ─· ${p}mining
┃ ❏ ─· ${p}jual
┃ ❏ ─· ${p}beli
┃ ❏ ─· ${p}berburu
┃ ❏ ─· ${p}nebang
┃ ❏ ─· ${p}berlayar
┃ ❏ ─· ${p}inventory
┃ ❏ ─· ${p}redeemdel
┃ ❏ ─· ${p}redeemset
┃ ❏ ─· ${p}redeem
╰──────────── •
`}

global.privacyMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. PRIVACY MENU ໒  ֵ  ׄ
┃ ❏ ─· ${p}setcallprivacy
┃ ❏ ─· ${p}setlastprivacy
┃ ❏ ─· ${p}setonlineprivacy
┃ ❏ ─· ${p}setprofileprivacy
┃ ❏ ─· ${p}setstatusprivacy
┃ ❏ ─· ${p}setreadreceiptsprivacy
┃ ❏ ─· ${p}setreactionmode
╰──────────── •
`}

global.newsletterMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. NEWSLETTER MENU ໒  ֵ  ׄ
┃ ❏ ─· ${p}setnewsletterdesc
┃ ❏ ─· ${p}setnewslettername
┃ ❏ ─· ${p}setnewsletterpic
┃ ❏ ─· ${p}follownewsletter
┃ ❏ ─· ${p}unfollownewsletter
┃ ❏ ─· ${p}mutenewsletter
┃ ❏ ─· ${p}unmutenewsletter
┃ ❏ ─· ${p}createnewsletter
┃ ❏ ─· ${p}newsletterinfo
╰──────────── •
`}

global.aiMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *AI MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}deepseek
┃ ❏ ─· ${p}dreamshaper
┃ ❏ ─· ${p}flux
┃ ❏ ─· ${p}felo
┃ ❏ ─· ${p}gandalf
┃ ❏ ─· ${p}gemini
┃ ❏ ─· ${p}gemma
┃ ❏ ─· ${p}gpt3
┃ ❏ ─· ${p}gita
┃ ❏ ─· ${p}naw
┃ ❏ ─· ${p}muslimai
┃ ❏ ─· ${p}mistral7b
┃ ❏ ─· ${p}metaai
┃ ❏ ─· ${p}blackboxai
┃ ❏ ─· ${p}claudeai
┃ ❏ ─· ${p}jokoai
┃ ❏ ─· ${p}aishepherd
┃ ❏ ─· ${p}bardai
┃ ❏ ─· ${p}bibleai
┃ ❏ ─· ${p}blackboxai-pro
┃ ❏ ─· ${p}claude-sonnet
┃ ❏ ─· ${p}dbrx-instruct
┃ ❏ ─· ${p}deepseek-llm
┃ ❏ ─· ${p}dreamshaper
┃ ❏ ─· ${p}flux
┃ ❏ ─· ${p}felo
┃ ❏ ─· ${p}gandalf
┃ ❏ ─· ${p}gemini-pro
┃ ❏ ─· ${p}gpt3
┃ ❏ ─· ${p}gita
┃ ❏ ─· ${p}naw
╰──────────── •
`}

global.otherMenu = (p) => {
return`
╭─ׁ ࣪ ִֶָ☾. *OTHERS MENU* ໒  ֵ  ׄ 
┃ ❏ ─· ${p}daftar
┃ ❏ ─· ${p}unreg
┃ ❏ ─· ${p}ping
┃ ❏ ─· ${p}ipwhois
┃ ❏ ─· ${p}country
┃ ❏ ─· ${p}dns
┃ ❏ ─· ${p}speedtest
┃ ❏ ─· ${p}otakudesu
┃ ❏ ─· ${p}kusonimeinfo
┃ ❏ ─· ${p}kusonimesearch
┃ ❏ ─· ${p}quotesanime
┃ ❏ ─· ${p}gempa
┃ ❏ ─· ${p}githubstalk
┃ ❏ ─· ${p}npmstalk
┃ ❏ ─· ${p}mlstalk
┃ ❏ ─· ${p}runtime
┃ ❏ ─· ${p}donate
┃ ❏ ─· ${p}script
┃ ❏ ─· ${p}repository
┃ ❏ ─· ${p}infobot
┃ ❏ ─· ${p}owner
┃ ❏ ─· ${p}addsubdo
┃ ❏ ─· ${p}delsubdo
┃ ❏ ─· ${p}listsubdo
┃ ❏ ─· ${p}jadibot
┃ ❏ ─· ${p}stopjadibot
┃ ❏ ─· ${p}listjadibot
╰──────────── •
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})