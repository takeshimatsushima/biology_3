// --- DATA ---
const lessons = [
    { id: 1, navTitle: "①恒常性", title: "体内環境と恒常性", icon: "🏠", content: "私たちの体は、周りの環境（外部環境）が暑かったり寒かったりしても、体温を一定に保とうとするよね。このように、体が内部の状態を一定の範囲に保ち、生命を維持する性質を<span class='tooltip-container'><strong>恒常性（ホメオスタシス）</strong><span class='tooltip-text'>外部環境が変化しても、体内の状態を一定に保とうとする性質。生命維持の基本。</span></span>と呼ぶんだ。<br><br>この恒常性を理解する上で重要なのが、<span class='tooltip-container'><strong>体内環境</strong><span class='tooltip-text'>体液が作る、細胞にとっての内部の環境。</span></span>という考え方だ。私たちの細胞は、直接外気に触れているわけではなく、<span class='tooltip-container'><strong>体液</strong><span class='tooltip-text'>血液、組織液、リンパ液など、細胞の周囲を満たす液体。</span></span>という液体に満たされた環境の中で生きている。この体液が体内環境の正体で、主に以下の3つから構成される。<br><ul><li class='mt-2 ml-4 list-disc'><strong>血液</strong>：血管を流れ、酸素や栄養素を全身に運び、老廃物を回収する。</li><li class='mt-2 ml-4 list-disc'><strong>組織液</strong>：血管からしみ出て、細胞と細胞の間を満たす液体。細胞に直接、酸素や栄養素を届け、老廃物を受け取る。</li><li class='mt-2 ml-4 list-disc'><strong>リンパ液</strong>：組織液の一部がリンパ管に入ったもの。老廃物を運んだり、免疫にも関わったりする。</li></ul><br>体液は互いに循環し、物質を交換することで、細胞が安定して活動できる環境を維持している。恒常性とは、この体液の状態（温度、pH、成分濃度など）を一定に保つ仕組みそのものなんだ。", preview: "次回は、体を自動でコントロールする「自律神経系」の秘密に迫るよ！", color: "sky" },
    { id: 2, navTitle: "②自律神経", title: "自律神経系", icon: "🧠", content: "恒常性を保つための情報伝達には、主に2つのシステムがある。今回はその一つ、高速情報網である<span class='tooltip-container'><strong>神経系</strong><span class='tooltip-text'>ニューロンという細胞で構成され、電気信号で高速に情報を伝達するシステム。</span></span>、特に意思とは無関係に働く<span class='tooltip-container'><strong>自律神経系</strong><span class='tooltip-text'>意思とは無関係に内臓などの働きを自動で調節する神経系。</span></span>に注目しよう。<br><br>自律神経系は、アクセル役の<span class='tooltip-container'><strong>交感神経</strong><span class='tooltip-text'>活動時や緊張時に働き、心拍数を上げたり血管を収縮させたりする。</span></span>と、ブレーキ役の<span class='tooltip-container'><strong>副交感神経</strong><span class='tooltip-text'>リラックス時に働き、心拍数を抑えたり消化を促進したりする。</span></span>の2つからなる。これらは多くの場合、同じ器官に対して互いに反対の作用（<span class='tooltip-container'><strong>きっ抗的</strong><span class='tooltip-text'>一つの器官に対して、互いに反対の作用を及ぼすこと。</span></span>な作用）を及ぼすことで、体の状態を精密に調節しているんだ。<br><br><strong>具体的な働きを見てみよう：</strong><br><ul><li class='mt-2 ml-4 list-disc'><strong>心臓</strong>：交感神経は拍動を促進し、副交感神経は抑制する。</li><li class='mt-2 ml-4 list-disc'><strong>消化管</strong>：交感神経はぜん動運動を抑制し、副交感神経は促進する。</li><li class='mt-2 ml-4 list-disc'><strong>瞳孔</strong>：交感神経は拡大させ（多くの光を取り込む）、副交感神経は収縮させる。</li></ul><br>これらの調節の中枢は、脳の<span class='tooltip-container'><strong>間脳視床下部</strong><span class='tooltip-text'>自律神経系や内分泌系の最高中枢。体温、血糖、体液バランスなどを調節する。</span></span>にあり、ここから全身の器官へ指令が出されているんだ。", preview: "次回は、もう一つの司令塔、化学物質で指令を伝える「内分泌系」の仕組みを探るよ！", color: "indigo" },
    { id: 3, navTitle: "③内分泌系", title: "内分泌系とホルモン", icon: "🧪", content: "もう一つの情報伝達システムが、化学物質で指令を伝える<span class='tooltip-container'><strong>内分泌系</strong><span class='tooltip-text'>ホルモンを血液中に分泌し、体液を介して情報を伝達するシステム。</span></span>だ。神経系が電話のように特定の相手に素早く情報を伝えるのに対し、内分泌系は血液の流れに乗せて全身に一斉放送するようなイメージだ。効果はゆっくりだが、広範囲に、そして持続的に作用する。<br><br>このシステムで使われる情報伝達物質が<span class='tooltip-container'><strong>ホルモン</strong><span class='tooltip-text'>内分泌腺でつくられ、血液によって運ばれる化学物質。特定の細胞に作用する。</span></span>で、<span class='tooltip-container'><strong>内分泌腺</strong><span class='tooltip-text'>ホルモンを生産し、血液中に直接分泌する器官。</span></span>（脳下垂体、甲状腺、すい臓など）で作られる。ホルモンは、自分にピッタリ合う鍵穴（<span class='tooltip-container'><strong>受容体</strong><span class='tooltip-text'>特定のホルモンや神経伝達物質と特異的に結合するタンパク質。</span></span>）を持つ<span class='tooltip-container'><strong>標的細胞</strong><span class='tooltip-text'>特定のホルモンに対する受容体を持ち、そのホルモンの作用対象となる細胞。</span></span>にのみ作用する。<br><br>ホルモンの分泌量は、<span class='tooltip-container'><strong>負のフィードバック</strong><span class='tooltip-text'>結果が原因にさかのぼって、その原因の働きを抑制する調節機構。</span></span>という仕組みで巧みに調節されている。例えば、甲状腺から分泌される<strong>チロキシン</strong>が増えすぎると、チロキシン自身が「もう十分だよ！」と脳に働きかけ、チロキシンの分泌を促すホルモンをストップさせる。これにより、ホルモン量が常に適切な範囲に保たれるんだ。", preview: "次回は、血糖濃度の調節と、その中心となる肝臓の働きについて見ていくよ！", color: "amber" },
    { id: 4, navTitle: "④血糖調節", title: "血糖濃度の調節と肝臓の働き", icon: "🍬", content: "食事をすると、血液中のグルコース濃度、つまり<span class='tooltip-container'><strong>血糖濃度</strong><span class='tooltip-text'>血液中に含まれるグルコースの濃度。健康なヒトでは約0.1%に保たれる。</span></span>が上がる。高すぎても低すぎても体に悪影響があるため、血糖濃度は厳密に調節されている。その中心を担うのが、すい臓の<span class='tooltip-container'><strong>ランゲルハンス島</strong><span class='tooltip-text'>すい臓にある内分泌腺組織。インスリンやグルカゴンを分泌する。</span></span>から分泌されるホルモンと、化学工場である<strong>肝臓</strong>だ。<br><br><strong>血糖濃度の調節メカニズム：</strong><br><ul><li class='mt-2 ml-4 list-disc'><strong>血糖濃度が上がった時（食後など）</strong>：ランゲルハンス島のB細胞から<span class='tooltip-container'><strong>インスリン</strong><span class='tooltip-text'>ランゲルハンス島B細胞から分泌され、血糖濃度を下げる唯一のホルモン。</span></span>が分泌される。インスリンは、細胞が血液中からグルコースを取り込むのを促進するとともに、肝臓や筋肉でグルコースを<strong>グリコーゲン</strong>という貯蔵物質に変えて蓄えさせる。これにより血糖濃度が下がる。</li><li class='mt-2 ml-4 list-disc'><strong>血糖濃度が下がった時（空腹時など）</strong>：ランゲルハンス島のA細胞から<span class='tooltip-container'><strong>グルカゴン</strong><span class='tooltip-text'>ランゲルハンス島A細胞から分泌され、血糖濃度を上げるホルモン。</span></span>が分泌される。グルカゴンは、肝臓に貯蔵したグリコーゲンをグルコースに分解して血液中に放出させ、血糖濃度を上げる。また、緊張時には副腎から<strong>アドレナリン</strong>も分泌され、同様に血糖濃度を上げる。</li></ul><br>このように、肝臓は血糖の貯蔵庫として、ホルモンはその出し入れを指示する鍵として働いているんだ。", preview: "次回は、体液のバランスを保つ腎臓の働きと、体温調節のメカニズムを学ぶよ！", color: "rose" },
    { id: 5, navTitle: "⑤腎臓/体温", title: "腎臓の働きと体温の調節", icon: "🌡️", content: "恒常性の維持には、体液の量や濃度の調節、そして体温の調節も欠かせない。これらも自律神経とホルモンによって巧みにコントロールされている。<br><br><strong>腎臓の働きと体液の調節</strong><br>腎臓は、血液をろ過して不要な老廃物を尿として排出するだけでなく、体液の量とイオンバランスを調節する重要な器官だ。腎臓にある<strong>ネフロン</strong>という構造で、まず血液から水分や小さな物質をこし取り（<strong>ろ過</strong>）、その後、体に必要な水分やグルコース、ナトリウムイオンなどを血液中に回収する（<strong>再吸収</strong>）。この水分の再吸収を促進するのが、脳下垂体後葉から分泌される<span class='tooltip-container'><strong>バソプレシン</strong><span class='tooltip-text'>脳下垂体後葉から分泌され、腎臓での水の再吸収を促進するホルモン。</span></span>だ。体が水分不足になるとバソプレシンの分泌が増え、尿の量を減らして体液の濃度を保つんだ。<br><br><strong>体温の調節</strong><br>体温調節の中枢も間脳視床下部にある。<br><ul><li class='mt-2 ml-4 list-disc'><strong>寒い時</strong>：交感神経の働きで皮膚の血管を収縮させて熱の放出を防ぎ、骨格筋を震わせて（ふるえ）熱を産生する。さらに甲状腺から<strong>チロキシン</strong>が分泌され、細胞の代謝を活発にして熱産生を増やす。</li><li class='mt-2 ml-4 list-disc'><strong>暑い時</strong>：皮膚の血管を拡張させ、汗腺からの発汗を促進することで、気化熱を利用して効率よく体から熱を逃がす。</li></ul>", preview: "次回は、体中を巡る「血液」の成分や、ケガをした時に血が固まる仕組みについて見ていこう！", color: "orange" },
    { id: 6, navTitle: "⑥血液", title: "血液の成分と働き・凝固・循環", icon: "🩸", content: "血液は、体内環境を維持するための物質運搬を担う、まさに「生命の川」だ。<br><br><strong>血液の成分と働き</strong><br>血液は、液体成分の<span class='tooltip-container'><strong>血しょう</strong><span class='tooltip-text'>血液の液体成分。水、タンパク質、グルコース、イオンなどを含む。</span></span>と、細胞成分の<strong>血球</strong>からなる。<br><ul><li class='mt-2 ml-4 list-disc'><strong>赤血球</strong>：ヘモグロビンを含み、酸素の運搬を担う。</li><li class='mt-2 ml-4 list-disc'><strong>白血球</strong>：好中球、リンパ球、マクロファージなど、様々な種類があり、免疫システムの中核を担う。</li><li class='mt-2 ml-4 list-disc'><strong>血小板</strong>：血管が損傷した際に、血液凝固のきっかけを作る。</li></ul><br><strong>血液凝固の仕組み</strong><br>ケガで出血すると、まず傷口に<strong>血小板</strong>が集まって一時的な栓（血小板血栓）を作る。これをきっかけに、血しょう中に含まれる多数の凝固因子が連鎖的に反応し、最終的に<span class='tooltip-container'><strong>フィブリン</strong><span class='tooltip-text'>血液凝固の最終段階で形成される、網状の繊維状タンパク質。</span></span>という繊維状のタンパク質が作られる。このフィブリンが網のように血球をからめとって、丈夫なゼリー状の塊である<strong>血ぺい</strong>を形成し、完全に出血を止めるんだ。この一連の流れを<strong>血液凝固</strong>という。", preview: "次回からはいよいよ「免疫」の世界へ！まずは体を守る最前線のバリア「生体防御」について学ぶよ。", color: "lime" },
    { id: 7, navTitle: "⑦生体防御", title: "生体防御", icon: "🛡️", content: "私たちの周りには、目に見えない細菌やウイルスといった<span class='tooltip-container'><strong>病原体</strong><span class='tooltip-text'>体内に侵入し、病気を引き起こす微生物やウイルスのこと。</span></span>が常に存在している。それらから体を守る仕組み全体を<span class='tooltip-container'><strong>生体防御</strong><span class='tooltip-text'>病原体の侵入を防いだり、侵入した病原体を排除したりする体の仕組みの総称。</span></span>と呼ぶんだ。<br><br>生体防御には、大きく分けて2つの防衛ラインがある。<br><strong>第一の壁：物理的・化学的防御</strong><br>これは、病原体の体内への侵入そのものを防ぐバリアだ。<br><ul><li class='mt-2 ml-4 list-disc'><strong>物理的なバリア</strong>：体の表面を覆う<strong>皮膚</strong>や、気管や消化管の内壁を覆う<strong>粘膜</strong>が、病原体の侵入を物理的に防ぐ。</li><li class='mt-2 ml-4 list-disc'><strong>化学的なバリア</strong>：涙やだ液に含まれる<strong>リゾチーム</strong>という酵素が細菌の細胞壁を破壊したり、強力な酸性である<strong>胃酸</strong>が多くの微生物を殺菌したりする。</li></ul><br><strong>第二の壁：免疫</strong><br>もし第一の壁が破られて病原体が体内に侵入してしまった場合、次に待ち構えているのが<span class='tooltip-container'><strong>免疫</strong><span class='tooltip-text'>体内に侵入した異物を非自己と認識して排除する仕組み。</span></span>システムだ。免疫は、体内に侵入した「自分ではないもの（非自己）」を見つけ出し、攻撃・排除する高度な仕組みなんだ。", preview: "次回は、生まれつき備わっている初期防衛システム「自然免疫」の働きを詳しく見ていくよ！", color: "teal" },
    { id: 8, navTitle: "⑧自然免疫", title: "自然免疫", icon: "⚔️", content: "体内に侵入した病原体に対する最初の防衛部隊が<span class='tooltip-container'><strong>自然免疫</strong><span class='tooltip-text'>生まれつき備わっている、広範囲の病原体に素早く反応する初期防衛システム。</span></span>だ。これは生まれつき備わっている仕組みで、特定の敵を記憶するのではなく、「いかにも怪しいヤツ」という大まかな特徴を認識して、素早く攻撃を仕掛けるのが特徴だ。<br><br><strong>自然免疫で活躍する主な細胞たち</strong><br><ul><li class='mt-2 ml-4 list-disc'><span class='tooltip-container'><strong>食細胞</strong><span class='tooltip-text'>マクロファージや好中球など、異物を食べて分解する細胞。</span></span>：代表格は<strong>マクロファージ</strong>と<strong>好中球</strong>。病原体を見つけると、パクリと食べて（<span class='tooltip-container'><strong>食作用</strong><span class='tooltip-text'>細胞が外部の大きな物質を細胞内に取り込む働き。</span></span>）分解してしまう。</li><li class='mt-2 ml-4 list-disc'><span class='tooltip-container'><strong>NK（ナチュラルキラー）細胞</strong><span class='tooltip-text'>ウイルス感染細胞やがん細胞を直接攻撃するリンパ球の一種。</span></span>：ウイルスに感染して様子がおかしくなった自分の細胞や、がん細胞を見つけ出し、命令なしで攻撃するパトロール隊員。</li><li class='mt-2 ml-4 list-disc'><strong>樹状細胞</strong>：病原体を食べると同時に、その特徴（断片）を分析し、次に控える獲得免疫部隊に「こんな敵が来たぞ！」と知らせる、超重要な情報伝達役だ。</li></ul><br>ケガした場所が赤く腫れて熱を持つ<span class='tooltip-container'><strong>炎症</strong><span class='tooltip-text'>病原体の侵入に対し、赤み・熱・腫れ・痛みを伴う生体防御反応。</span></span>は、これらの細胞が血管を広げて集まり、病原体と戦っている証拠なんだ。", preview: "次回は、特定の敵を記憶して攻撃する、超高性能な「獲得免疫」の仕組みを解き明かすよ！", color: "cyan" },
    { id: 9, navTitle: "⑨獲得免疫", title: "獲得免疫", icon: "🎯", content: "自然免疫が時間稼ぎをしている間に、より強力で専門的な部隊、<span class='tooltip-container'><strong>獲得免疫（適応免疫）</strong><span class='tooltip-text'>特定の病原体を記憶し、それに対して特異的に働く後天的な免疫システム。</span></span>が準備を整える。これは、特定の敵（<span class='tooltip-container'><strong>抗原</strong><span class='tooltip-text'>リンパ球によって異物（非自己）として認識される物質。</span></span>）の情報を正確に記憶し、その敵だけを狙い撃ちにするオーダーメイドの防衛システムだ。<br><br><strong>獲得免疫の二大作戦</strong><br>獲得免疫は、司令塔である<span class='tooltip-container'><strong>ヘルパーT細胞</strong><span class='tooltip-text'>他の免疫細胞を活性化させる、免疫の司令塔。</span></span>からの指令を受け、主に2つの作戦を展開する。<br><ol class='list-decimal ml-5 mt-2 space-y-2'><li><strong>体液性免疫</strong>：<span class='tooltip-container'><strong>B細胞</strong><span class='tooltip-text'>骨髄で成熟するリンパ球。抗体を産生する。</span></span>が主役。ヘルパーT細胞に活性化されると、B細胞は<span class='tooltip-container'><strong>抗体産生細胞</strong><span class='tooltip-text'>B細胞が分化した細胞で、大量の抗体を産生・分泌する。</span></span>に変身し、<span class='tooltip-container'><strong>抗体</strong><span class='tooltip-text'>B細胞が産生するタンパク質で、特定の抗原に特異的に結合する。</span></span>というミサイルのようなタンパク質を大量に放出する。抗体は血液に乗って全身を巡り、病原体に結合して無力化する。</li><li><strong>細胞性免疫</strong>：<span class='tooltip-container'><strong>キラーT細胞</strong><span class='tooltip-text'>ウイルス感染細胞などを特異的に認識し、破壊するT細胞。</span></span>が主役。ヘルパーT細胞に活性化されると、ウイルスに感染してしまった自分の細胞など、異常な細胞を見つけ出し、細胞ごと破壊して病原体の増殖を防ぐ。</li></ol>戦いが終わった後、一部のT細胞やB細胞は<span class='tooltip-container'><strong>記憶細胞</strong><span class='tooltip-text'>抗原の情報を記憶しているリンパ球。長期間体内に留まる。</span></span>として残り、同じ敵が再び侵入した際に、より速く強力な二次応答を引き起こす（<strong>免疫記憶</strong>）。", preview: "最終回！免疫システムのトラブルや、その力を応用した最先端医療について見ていこう。", color: "emerald" },
    { id: 10, navTitle: "⑩免疫と医療", title: "免疫と疾患と医療", icon: "🩺✨", content: "いつもは頼もしい免疫システムも、時にトラブルを起こすことがある。また、その力を応用した医療も大きく発展している。<br><br><strong>免疫システムの主な疾患</strong><br><ul><li class='mt-2 ml-4 list-disc'><span class='tooltip-container'><strong>自己免疫疾患</strong><span class='tooltip-text'>免疫系が自分自身の正常な細胞や組織を攻撃してしまう疾患。</span></span>：免疫が自分自身を「非自己」と誤認して攻撃してしまう病気。関節リウマチや1型糖尿病などがこれにあたる。</li><li class='mt-2 ml-4 list-disc'><span class='tooltip-container'><strong>アレルギー</strong><span class='tooltip-text'>本来無害な物質（アレルゲン）に対して免疫系が過剰に反応する現象。</span></span>：花粉や食物など、本来は無害なはずの物質（アレルゲン）に対して免疫が過剰に反応してしまう状態。花粉症や食物アレルギーが代表例だ。</li><li class='mt-2 ml-4 list-disc'><span class='tooltip-container'><strong>免疫不全</strong><span class='tooltip-text'>免疫系の機能が低下し、感染症にかかりやすくなる状態。</span></span>：免疫システム全体の働きが弱ってしまう状態。代表的なのがエイズで、HIVがヘルパーT細胞を破壊することで免疫力が低下し、健康な人なら問題にならないような病原体にも感染しやすくなる。</li></ul><br><strong>免疫を応用した医療</strong><br><ul><li class='mt-2 ml-4 list-disc'><strong>予防接種（ワクチン）</strong>：免疫記憶の仕組みを利用し、無毒化・弱毒化した病原体をあらかじめ接種することで、本物の病気に対する抵抗力をつけておく。</li><li class='mt-2 ml-4 list-disc'><strong>抗体医薬</strong>：特定の分子（がん細胞の目印など）だけを狙い撃ちする抗体を薬として利用する、副作用の少ない治療法。</li><li class='mt-2 ml-4 list-disc'><strong>がん免疫療法</strong>：がん細胞が免疫にかけているブレーキ（例：PD-1）を外す薬（<span class='tooltip-container'><strong>免疫チェックポイント阻害薬</strong><span class='tooltip-text'>免疫細胞のブレーキ役（PD-1など）の働きを阻害し、がん細胞への攻撃力を高める薬。</span></span>）を使い、体が本来持つ力でがんを攻撃させる画期的な治療法。</li></ul>", preview: "全10回、お疲れ様でした！私たちの体が、いかに精巧でダイナミックな仕組みによって守られ、調節されているか、少しでも感じてもらえたかな？", color: "purple" }
];

const quizzes = {
    1: { question: "血液、組織液、リンパ液を総称して何と呼びますか？", options: ["A. 血球", "B. 体液", "C. 血しょう", "D. 循環系"], answer: "B" },
    2: { question: "リラックスしている時に働き、消化管の運動を促進する自律神経はどちらですか？", options: ["A. 交感神経", "B. 副交感神経", "C. 運動神経", "D. 感覚神経"], answer: "B" },
    3: { question: "ホルモンが作用する特定の細胞を何と呼びますか？", options: ["A. 内分泌腺", "B. 受容体", "C. 標的細胞", "D. 神経細胞"], answer: "C" },
    4: { question: "空腹時に血糖濃度を上げるために、肝臓のグリコーゲン分解を促進するホルモンは何ですか？", options: ["A. インスリン", "B. グルカゴン", "C. バソプレシン", "D. チロキシン"], answer: "B" },
    5: { question: "体が水分不足の時に分泌され、腎臓での水の再吸収を促進するホルモンは何ですか？", options: ["A. インスリン", "B. バソプレシン", "C. アドレナリン", "D. グルカゴン"], answer: "B" },
    6: { question: "血液凝固の際に、最終的に形成される繊維状のタンパク質は何ですか？", options: ["A. ヘモグロビン", "B. フィブリン", "C. 血小板", "D. グリコーゲン"], answer: "B" },
    7: { question: "涙やだ液に含まれ、細菌の細胞壁を破壊することで体を守る酵素は何ですか？", options: ["A. ペプシン", "B. アミラーゼ", "C. リゾチーム", "D. トリプシン"], answer: "C" },
    8: { question: "自然免疫において、病原体を食べてその情報を獲得免疫に伝える役割を持つ細胞は何ですか？", options: ["A. 好中球", "B. NK細胞", "C. マクロファージ", "D. 樹状細胞"], answer: "D" },
    9: { question: "獲得免疫において、ウイルス感染細胞などを細胞ごと破壊する役割を持つ細胞は何ですか？", options: ["A. B細胞", "B. キラーT細胞", "C. ヘルパーT細胞", "D. 抗体産生細胞"], answer: "B" },
    10: { question: "予防接種（ワクチン）が病気の予防に有効なのは、獲得免疫のどの仕組みを利用しているからですか？", options: ["A. 炎症反応", "B. 食作用", "C. 免疫記憶", "D. アレルギー反応"], answer: "C" }
};

// --- SCRIPT ---
document.addEventListener('DOMContentLoaded', () => {
    const tocContainer = document.getElementById('toc');
    const lessonsContainer = document.getElementById('lessons-container');
    const quizModal = document.getElementById('quiz-modal');
    const quizTitle = document.getElementById('quiz-title');
    const quizQuestion = document.getElementById('quiz-question');
    const quizOptionsContainer = document.getElementById('quiz-options');
    const quizFeedback = document.getElementById('quiz-feedback');
    const quizCloseBtn = document.getElementById('quiz-close-btn');

    // 1. 目次と授業内容を生成
    lessons.forEach(lesson => {
        // 目次リンクの生成
        const navLink = document.createElement('a');
        navLink.href = `#lesson-${lesson.id}`;
        navLink.className = `nav-link flex-shrink-0 px-4 py-2 text-sm font-bold text-slate-500 hover:bg-slate-100 rounded-full transition-colors duration-200`;
        navLink.innerHTML = `<span class="mr-1">${lesson.icon}</span>${lesson.navTitle}`;
        tocContainer.appendChild(navLink);

        // 授業セクションの生成
        const section = document.createElement('section');
        section.id = `lesson-${lesson.id}`;
        section.className = 'bg-white p-6 sm:p-8 rounded-2xl shadow-lg mb-8 scroll-mt-48';
        
        const previewColorClasses = {
            bg: `bg-${lesson.color}-50`,
            border: `border-${lesson.color}-400`,
            title: `text-${lesson.color}-800`,
            text: `text-${lesson.color}-700`
        };

        section.innerHTML = `
            <h2 class="text-xl sm:text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span class="text-3xl mr-3">${lesson.icon}</span>
                <span class="flex-1">第${lesson.id}回：${lesson.title}</span>
            </h2>
            <div class="prose prose-slate max-w-none text-base leading-relaxed">
                <p>${lesson.content}</p>
            </div>
            <div class="mt-8 flex justify-end">
                <button class="quiz-open-btn bg-${lesson.color}-500 hover:bg-${lesson.color}-600 text-white font-bold py-2 px-6 rounded-full transition-transform transform hover:scale-105" data-lesson-id="${lesson.id}">
                    理解度チェック！
                </button>
            </div>
            <div class="mt-8 p-4 ${previewColorClasses.bg} rounded-lg border-l-4 ${previewColorClasses.border}">
                <h4 class="font-bold ${previewColorClasses.title}">${lesson.id === 10 ? '講義のまとめ' : '次回予告'}</h4>
                <p class="mt-1 ${previewColorClasses.text}">${lesson.preview}</p>
            </div>
        `;
        lessonsContainer.appendChild(section);
    });

    // 2. スクロール位置に応じて目次をアクティブにする
    const navLinks = document.querySelectorAll('.nav-link');
    const lessonSections = document.querySelectorAll('main section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { rootMargin: "-40% 0px -60% 0px" });

    lessonSections.forEach(section => observer.observe(section));

    // 3. クイズ機能
    document.querySelectorAll('.quiz-open-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const lessonId = e.target.dataset.lessonId;
            const quizData = quizzes[lessonId];
            
            quizTitle.textContent = `第${lessonId}回 理解度チェック！`;
            quizQuestion.textContent = quizData.question;
            quizOptionsContainer.innerHTML = '';
            quizFeedback.classList.add('hidden');

            quizData.options.forEach(optionText => {
                const optionBtn = document.createElement('button');
                optionBtn.className = 'block w-full text-left p-4 border rounded-lg hover:bg-slate-100 transition-colors';
                optionBtn.textContent = optionText;
                optionBtn.onclick = () => checkAnswer(optionText.substring(0, 1), quizData.answer);
                quizOptionsContainer.appendChild(optionBtn);
            });
            
            quizModal.classList.remove('hidden');
            quizModal.classList.add('flex');
            setTimeout(() => {
                 quizModal.classList.remove('opacity-0');
                 quizModal.querySelector('.modal-content').classList.remove('scale-95');
            }, 10);
        });
    });

    function checkAnswer(selected, correct) {
        const isCorrect = selected === correct;
        quizFeedback.textContent = isCorrect ? '正解！素晴らしい！' : `残念！正解は ${correct} です。`;
        quizFeedback.className = `mt-6 p-4 rounded-lg text-center font-bold ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`;
        quizFeedback.classList.remove('hidden');

        // Disable all option buttons
        quizOptionsContainer.querySelectorAll('button').forEach(btn => {
            btn.disabled = true;
            if (btn.textContent.startsWith(correct)) {
                 btn.classList.add('bg-green-100', 'border-green-400');
            }
        });
    }

    function closeQuizModal() {
        quizModal.classList.add('opacity-0');
        quizModal.querySelector('.modal-content').classList.add('scale-95');
        setTimeout(() => {
            quizModal.classList.add('hidden');
            quizModal.classList.remove('flex');
        }, 300);
    }

    quizCloseBtn.addEventListener('click', closeQuizModal);
    quizModal.addEventListener('click', (e) => {
        if (e.target === quizModal) {
            closeQuizModal();
        }
    });
});
