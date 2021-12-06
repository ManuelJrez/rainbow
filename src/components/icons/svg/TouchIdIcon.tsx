import PropTypes from 'prop-types';
import React from 'react';
import { Path } from 'react-native-svg';
import Svg from '../Svg';

const TouchIdIcon = ({ color, colors, size, ...props }: any) => (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Svg height={size} viewBox="0 0 34 34" width={size} {...props}>
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the
    '--jsx' flag is provided... Remove this comment to see the full error
    message
    <Path
      d="M1.69622648,23.1028282 C1.38432539,23.1652209 1.0742659,22.9876978 0.970175392,22.6871312 C-0.215958841,19.3069221 -0.317032446,15.6407021 0.681064468,12.2002762 C0.781100293,11.8652427 1.13278262,11.6737489 1.46848404,11.7715202 C1.80418545,11.8692915 1.9980495,12.2196728 1.90254721,12.5560267 C0.978617738,15.74344 1.0729766,19.1397994 2.17245197,22.2709977 C2.28734313,22.602951 2.11149063,22.9652071 1.77959868,23.0802755 C1.7523269,23.0895946 1.72447725,23.0971281 1.69622648,23.1028282 Z M2.41136498,10.445677 C2.17523948,10.4930863 1.93258678,10.4030821 1.78449216,10.2131588 C1.63639755,10.0232355 1.60825765,9.76596278 1.71179511,9.5485165 C4.40240367,3.89710362 10.465003,0.0596544391 16.7973616,0.000144440062 C17.0263624,-0.00472638475 17.2403002,0.113892369 17.3574778,0.310703288 C17.4746553,0.507514207 17.4769774,0.752124925 17.3635575,0.951124977 C17.2501375,1.15012503 17.0384902,1.27278399 16.8094382,1.27226161 C10.9512681,1.32740657 5.34656109,4.8734168 2.86052724,10.0954556 C2.77447977,10.2765493 2.60797294,10.4063782 2.41136498,10.445677 Z M33.4904256,17.4918646 C33.3044058,17.529073 33.1114788,17.481495 32.9640882,17.3620636 C32.8166977,17.2426322 32.7301601,17.0637587 32.7279992,16.8740664 C32.6613512,11.4897317 29.8653991,6.50757552 25.3042359,3.64553201 C23.5719652,2.57791671 21.6520477,1.8503243 19.647294,1.50171703 C19.3047397,1.43837395 19.0768523,1.11128882 19.1360987,0.768002309 C19.1953451,0.424715799 19.5196845,0.192937237 19.8636543,0.248078519 C27.9782529,1.63065674 33.9346194,8.6311468 33.9999708,16.8624263 C34.002868,17.1669747 33.7895448,17.4308684 33.4911531,17.4918646 L33.4904256,17.4918646 Z M15.4727185,33.8485298 C15.250194,33.8930097 15.0208198,33.8156379 14.8707031,33.6454597 C14.7205865,33.4752815 14.6724405,33.2380455 14.7443394,33.0228103 L14.7612175,32.9721759 C14.9624457,32.3703829 15.1638194,31.7685898 15.359082,31.1649053 C15.4290246,30.9486577 15.6090209,30.7861507 15.831268,30.7385989 C16.0535151,30.6910472 16.2842485,30.765675 16.4365531,30.9343708 C16.5888577,31.1030666 16.6395948,31.3402015 16.5696522,31.556449 C16.3729345,32.1642076 16.1703968,32.7699292 15.9677136,33.3752143 L15.95069,33.4259942 C15.8786629,33.6423594 15.6962846,33.8035852 15.4727185,33.8485298 Z M16.9067785,29.226538 C16.6918867,29.2695697 16.4699725,29.1990081 16.3193963,29.0397692 C16.16882,28.8805303 16.1107687,28.65502 16.1657408,28.4428684 C17.0953481,24.8635384 17.1647522,21.056208 16.3720615,17.1257835 C16.3243112,16.9018596 16.4005801,16.6695497 16.571764,16.5175034 C16.742948,16.365457 16.9826347,16.3171338 17.1993596,16.3909738 C17.4160845,16.4648138 17.5764087,16.6494241 17.6191525,16.8743574 C18.4502555,20.9953885 18.3757588,24.9953625 17.3971176,28.7626801 C17.3360038,28.9984515 17.1455766,29.1785945 16.9067785,29.226538 Z M12.6964097,33.3193418 C12.470733,33.364692 12.2381655,33.2845579 12.0883237,33.1098179 C11.938482,32.935078 11.8947564,32.6930093 11.9739962,32.4768898 C12.0924342,32.153586 12.2105811,31.8300883 12.3284371,31.5063966 C13.0000708,29.6535841 13.7434365,27.4905629 14.0613567,25.2643943 C14.4136151,22.7988761 14.1819772,20.4312803 13.7267039,17.6347468 C13.4868495,16.200367 14.2005437,14.7752129 15.4927977,14.1080882 C16.7270409,13.4170792 18.2682778,13.6164881 19.2860145,14.5988638 C20.2899729,15.5354552 20.4603548,16.9923589 20.597417,18.1636437 C20.6189511,18.3481393 20.6401943,18.5287063 20.663911,18.7019983 C20.8503986,20.037359 20.9438899,21.3840624 20.9437099,22.732382 C20.9461714,22.9618525 20.824848,23.1748613 20.6262222,23.2897984 C20.4275964,23.4047356 20.1824613,23.4037823 19.9847355,23.2873038 C19.7870096,23.1708253 19.6673465,22.9568794 19.6715927,22.727435 C19.6716038,21.4383316 19.5819527,20.1507885 19.4032885,18.8741262 C19.3785532,18.6925407 19.3564371,18.5038256 19.3338844,18.3107455 C19.2091898,17.2469861 19.0804212,16.1468513 18.4180997,15.5289076 C17.7930145,14.928563 16.8490228,14.8071977 16.0924082,15.2299026 C15.285692,15.6460678 14.8378059,16.5335632 14.9822339,17.4297356 C15.4571499,20.3416515 15.6966449,22.8189553 15.3215427,25.4442338 C14.9868899,27.7897135 14.218498,30.0275222 13.5250392,31.9395538 C13.4070862,32.2645065 13.2885027,32.5894592 13.1692887,32.9144119 C13.0930895,33.1226356 12.9138795,33.2760945 12.6964097,33.3193418 Z M18.4146077,33.877048 C18.1948813,33.9209907 17.9682363,33.8461439 17.817892,33.6799896 C17.6675477,33.5138353 17.6156602,33.2808595 17.6812815,33.0666062 C18.4736812,30.4839595 19.1553544,28.148665 19.4709465,25.7251966 C19.4994326,25.4991246 19.6466597,25.305555 19.8569162,25.2177357 C20.0671726,25.1299164 20.3083417,25.161262 20.4891633,25.299911 C20.6699849,25.4385601 20.7628385,25.6633339 20.7325876,25.8891765 C20.4049189,28.4114402 19.707968,30.8010067 18.8982537,33.4398168 C18.8297356,33.6633171 18.6441284,33.8312129 18.4148987,33.877048 L18.4146077,33.877048 Z M10.1140541,32.3463752 C9.88494127,32.3923402 9.64907155,32.3089889 9.49970766,32.1292783 C9.35034377,31.9495678 9.31153433,31.7024326 9.39862456,31.4855899 C9.9579896,30.1507217 10.443342,28.7860323 10.8524728,27.3977332 C11.4644052,25.1831193 11.6563292,22.873518 11.418327,20.5882761 C11.3735126,20.1471164 11.2915954,19.7029011 11.2047312,19.2324957 C11.0414788,18.3477028 10.8726974,17.4327911 10.9543236,16.4913982 C11.0681523,15.2392339 11.5658332,14.0527572 12.3793626,13.0940902 C12.6070572,12.8264977 13.0085668,12.7941542 13.2761593,13.0218489 C13.5437518,13.2495436 13.5760954,13.6510532 13.3484007,13.9186456 C12.7054342,14.6754665 12.3119576,15.6124317 12.2217847,16.6013971 C12.1549997,17.3712441 12.3012284,18.1632072 12.4558962,19.0021673 C12.5431969,19.4767923 12.6339897,19.9677134 12.6840421,20.4600895 C12.9381315,22.9026616 12.7327355,25.371214 12.078466,27.738206 C11.6571961,29.172069 11.1568766,30.5815129 10.5798035,31.9600694 C10.4997255,32.1592087 10.3245647,32.3044921 10.1140541,32.3463752 Z M21.5049081,33.3276354 C21.2880318,33.3710324 21.0641765,33.2987187 20.9136751,33.1366448 C20.7631737,32.974571 20.7076109,32.7459813 20.7669259,32.5329077 C21.3582428,30.412955 21.9434488,28.1371704 22.2201921,25.8605128 C22.5009541,23.4208475 22.4657921,20.955154 22.1155767,18.5244868 L22.1112117,18.4933495 C21.8327223,16.4759751 21.5696561,14.5704911 20.0498959,13.3234002 C18.7290073,12.2434778 16.9360027,11.9414165 15.3342013,12.5289635 C15.0071973,12.6417234 14.6500216,12.4725266 14.5301307,12.1480692 C14.4102397,11.8236119 14.5715774,11.4628181 14.8933326,11.3358535 C16.9188996,10.5924989 19.1864548,10.9742329 20.8569911,12.3398119 C22.7618931,13.9029315 23.0718107,16.1480153 23.3715432,18.3199121 L23.3757628,18.3509038 C23.7411025,20.8902115 23.7771939,23.4660519 23.4831427,26.0145986 C23.1960688,28.3753559 22.5970402,30.7071584 21.9924827,32.8751266 C21.9280359,33.1056538 21.7396109,33.2804713 21.5049081,33.3274899 L21.5049081,33.3276354 Z M7.76071733,30.9731346 C7.52908818,31.0195888 7.29079234,30.9338548 7.14185122,30.7504792 C6.9929101,30.5671037 6.95785711,30.316292 7.05081688,30.0991088 C7.4889041,29.0994152 7.86339415,28.0730422 8.17204928,27.0261231 C8.27650445,26.6979897 8.6231027,26.5125508 8.95404404,26.6077358 C9.28498538,26.7029209 9.48009911,27.0441665 9.39425953,27.377654 C9.07122109,28.4755406 8.67913878,29.5519203 8.22035568,30.6003605 C8.13789201,30.7927386 7.96597597,30.9321653 7.76071733,30.9731346 Z M9.47370319,24.9617517 C9.27560707,25.0015508 9.07037917,24.9449627 8.92067368,24.8092634 C8.77096819,24.6735641 8.6945574,24.4748631 8.71476883,24.273822 C8.84873694,22.9805738 8.82239566,21.6757272 8.63634367,20.3889394 C8.59269331,20.0921169 8.54074937,19.7880194 8.49084245,19.4939614 C8.3178415,18.4799634 8.1390205,17.4314816 8.22442972,16.3357119 C8.54979459,12.7190082 11.0529908,9.66877663 14.5366993,8.64399214 C18.0204078,7.61920765 21.7765101,8.82817376 24.0084021,11.6926225 C24.145974,11.8734699 24.1766147,12.1139735 24.0887822,12.323538 C24.0009497,12.5331024 23.8079879,12.6798899 23.5825835,12.7086069 C23.3571791,12.737324 23.1335765,12.6436078 22.9960046,12.4627604 C21.104776,9.97520976 17.8737822,8.91409363 14.8759655,9.79599445 C11.8781488,10.6778953 9.73644229,13.3195579 9.49349136,16.4349437 C9.42074075,17.3732811 9.57846407,18.2996874 9.74564497,19.2803656 C9.79700691,19.5815531 9.85026035,19.8927802 9.89594773,20.2040073 C10.0973049,21.5945215 10.1260409,23.0045909 9.98150245,24.4021541 C9.95332063,24.6798844 9.74739976,24.9068104 9.47370319,24.9617517 Z M5.64527509,29.2073318 C5.41569617,29.2533824 5.17937906,29.1695881 5.03009258,28.9891977 C4.8808061,28.8088073 4.84268832,28.5609882 4.9308641,28.3440731 C5.3628482,27.3077957 5.67999308,26.2273075 5.87662203,25.1219486 C6.0708154,23.9481697 6.11914889,22.7548847 6.02052274,21.5692453 C5.97367135,20.9734178 5.872839,20.3880664 5.76618661,19.7685222 C5.62656779,19.0428817 5.53079994,18.3094876 5.4794037,17.5723268 C5.36617949,15.1716318 6.00206725,12.7951119 7.29904196,10.7717453 C9.97233588,6.61681242 15.169494,4.59580047 19.9385874,5.85685955 C20.275658,5.94883469 20.4754595,6.29545352 20.3861104,6.6332297 C20.2967614,6.97100589 19.951708,7.17349892 19.6132467,7.08678136 C16.4509425,6.25427632 13.0812022,6.97863377 10.5403371,9.03708888 C7.99947203,11.095544 6.5916855,14.2416495 6.74992036,17.5078697 C6.79887458,18.1941461 6.8890541,18.8768575 7.01997062,19.5523074 C7.12691402,20.1731611 7.23734944,20.8151125 7.28885687,21.469286 C7.39575155,22.7596788 7.34262832,24.058339 7.13069705,25.3356899 C6.91886192,26.5319718 6.57648848,27.7014183 6.10971499,28.8230631 C6.02940051,29.0211253 5.85487311,29.165526 5.64527509,29.2073318 Z M28.0815632,29.6960704 C28.0030302,29.7119472 27.9221885,29.712688 27.8433777,29.698253 C27.6773199,29.6684571 27.5299111,29.5738876 27.4336061,29.4353656 C27.3373011,29.2968436 27.2999959,29.1257264 27.3299039,28.9596888 C27.7601468,26.6417929 27.9514156,24.285867 27.9007052,21.9289243 C27.8065659,18.5656636 27.4457229,16.0055696 26.7657957,13.8722308 C25.9767966,11.4453621 24.3194073,9.39532283 22.1116482,8.11547499 C21.8071311,7.94025413 21.7023159,7.55134975 21.8775367,7.24683272 C22.0527576,6.94231569 22.4416619,6.83750041 22.746179,7.01272124 C25.2280815,8.45193373 27.0911192,10.7569481 27.9778209,13.4854885 C28.6957239,15.7358104 29.0754821,18.4075038 29.1731134,21.893422 C29.2261428,24.3377249 29.0282434,26.7810189 28.5825239,29.1849247 C28.5363293,29.4419528 28.3377402,29.6446383 28.0817087,29.6960704 L28.0815632,29.6960704 Z M3.68435515,26.8650532 C3.46870116,26.908176 3.2460657,26.8369032 3.09554877,26.676557 C2.94503184,26.5162109 2.88796631,26.2895175 2.94462695,26.0770186 C3.29479569,24.736741 3.41930201,23.3475023 3.31303604,21.9663181 C3.26574814,21.298904 3.15734973,20.6463311 3.04269477,19.9550548 C2.87820225,19.0870043 2.77527041,18.2084127 2.73466869,17.3258477 C2.65047002,12.5395474 4.94896174,8.0239675 8.86841812,5.27558217 C9.05513954,5.1460156 9.2968002,5.12590583 9.50236886,5.22282804 C9.70793752,5.31975025 9.84618342,5.51897964 9.86503065,5.74546842 C9.88387789,5.97195721 9.78046313,6.19129636 9.5937417,6.32086294 C6.02377784,8.82374949 3.93006568,12.9363127 4.00649485,17.2955835 C4.04578253,18.1185884 4.14302425,18.9378012 4.29749729,19.7471335 C4.41200675,20.4365183 4.53029924,21.1496198 4.58180668,21.8763984 C4.69823007,23.3983647 4.56024862,24.9290933 4.17353025,26.4057058 C4.11105758,26.6393671 3.92147998,26.8173851 3.68435515,26.8650532 Z M31.2489793,19.9840095 C31.2275906,19.988229 31.2053289,19.9915756 31.1832127,19.9937581 C30.8334698,20.0271759 30.522834,19.7707988 30.4893174,19.4210653 C30.2150476,16.5546912 29.7955676,13.2702922 28.2841009,10.5699351 C25.0226652,4.88372256 18.046231,2.50348705 11.9894193,5.01047895 C11.7792391,5.09978947 11.5373129,5.06958352 11.3555447,4.93133586 C11.1737765,4.7930882 11.0800609,4.56801473 11.1099991,4.34161729 C11.1399372,4.11521984 11.2889347,3.92224205 11.5003897,3.8359931 C18.1533975,1.08045131 25.8176513,3.69851983 29.3944207,9.94849936 C31.0265079,12.8644893 31.4689771,16.3045747 31.7559055,19.2998628 C31.7868332,19.6240146 31.5680935,19.9192252 31.2489793,19.9840095 Z M31.3707638,25.5460846 C31.1774838,25.5848573 30.9771435,25.5319384 30.8282229,25.4027752 C30.6793023,25.273612 30.5985903,25.0827659 30.6096469,24.8859456 C30.6580988,24.0420385 30.674104,23.1712137 30.6570803,22.2973334 C30.6506315,22.0688443 30.7672679,21.8544615 30.9626093,21.7357576 C31.1579507,21.6170538 31.4019614,21.6122807 31.6017955,21.7232547 C31.8016295,21.8342286 31.9265604,22.0438862 31.929052,22.2724527 C31.9466576,23.1789253 31.9300705,24.0827789 31.8795816,24.9589872 C31.8630535,25.2475565 31.6540543,25.4887095 31.3707638,25.5460846 Z M24.7359082,32.0438781 C24.5704478,32.0774035 24.3984469,32.0437825 24.2577893,31.9504201 C24.1171317,31.8570578 24.019355,31.7116122 23.9859949,31.5461185 C23.9526751,31.3808291 23.9816298,31.2842163 24.0587455,31.0244966 C24.3986186,29.8996163 24.6621867,28.7530805 24.8476531,27.5927048 C25.1397792,25.7045684 25.240104,23.7917184 25.1470946,21.8833824 C25.0391327,19.7180333 24.8763168,17.9442279 24.6765437,16.7538824 C24.5874127,16.1355875 24.4394953,15.5272066 24.234802,14.9370087 C24.1071137,14.6132601 24.2632892,14.246999 24.5853073,14.1150074 C24.9073254,13.9830158 25.2756354,14.1342963 25.4119068,14.4545266 C25.4235469,14.4826084 25.6983987,15.158898 25.9310552,16.5431967 C26.1391219,17.781412 26.3074668,19.6059973 26.4176113,21.8199439 C26.5149317,23.8167141 26.4097798,25.8182072 26.1037651,27.7937875 C25.9097387,29.0093417 25.6337236,30.2103819 25.2776092,31.3886861 C25.2588396,31.4516882 25.2444349,31.4989761 25.2357049,31.5299678 C25.1907143,31.787894 24.9922212,31.9918736 24.7356172,32.0438781 L24.7359082,32.0438781 Z"
      fill={color || colors.white}
      fillRule="evenodd"
    />
  </Svg>
);

TouchIdIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

TouchIdIcon.defaultProps = {
  size: 34,
};

export default TouchIdIcon;
