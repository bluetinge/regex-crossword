all_boards = {
  'original': {
    'size': 13,
    author: 'Dan Gulotta',
    x: [
      '[^X]*(DN|TE|NI)'
      ,'[RONMHC]*I[RONMHC]*'
      ,'.*(..)\\1P+'
      ,'(E|RC|NM)*'
      ,'([^MC]|MM|CC)*'
      ,'R?(CR)*MC[MA]*'
      ,'.*'
      ,'.*CDD.*RRP.*'
      ,'(XHH|[^XH])*'
      ,'([^CME]|ME)*'
      ,'.*RXO.*'
      ,'.*LR.*RL.*'
      ,'.*EU.*ES.*'
    ],
    y: [
      '.*H.*H.*'
      ,'(DI|NS|TH|OM)*'
      ,'F.*[AO].*[AO].*'
      ,'(O|RHH|MM)*'
      ,'.*'
      ,'C*MC(CCC|MM)*'
      ,'[^C]*[^R]*III.*'
      ,'(...?)\\1*'
      ,'([^X]|XCC)*'
      ,'(RR|HHH)*.?'
      ,'N.*X.X.X.*E'
      ,'R*D*M*'
      ,'.(C|HH)*'
    ],
    z: [
      '.*H.*V.*G.*'
      ,'[RC]*'
      ,'M*XEX.*'
      ,'.*MCC.*DD.*'
      ,'.*X.*RCHX.*'
      ,'.*(.)(.)(.)(.)\\4\\3\\2\\1.*'
      ,'(NI|ES|IH).*'
      ,'[^C]*MMM[^C]*'
      ,'.*(.)X\\1C\\1.*'
      ,'[ROMEA]*HO[UMIEC]*'
      ,'(XR|[^R])*'
      ,'[^M]*M[^M]*'
      ,'(S|MM|HHH)*'
    ],
  },
  'tumbler': {
    'size': 3,
    author: 'Kelly Boothby',
    x: [
      '(AC|KR|SH)', '.?[JKR][ACH].?', '(CS|KH|RE)'],
    y: [
      '(CK|HJ|RA)', '.?[AEH][AKS].?', '(AK|HR|JC)'],
    z: [
      '(AH|KJ|SA)', '.?[KRS][CHK].?', '(AS|JH|KE)']
  },
  'colors': {
    'size': 13,
    author: 'PiggyPig',
    x: [
      '.*RED.*'
      ,'.*BLUE.*'
      ,'.*BLACK.*'
      ,'.*VIOLET.*'
      ,'([^K]|K[^K])*K?'
      ,'..[RED].*[RED]{3}'
      ,'.[ORANGE]{4}.{4}[BLUE]{4}'
      ,'(.)(.)(.)(W|\\1|\\2|\\3)*'
      ,'..R.{5}[GREEN]*.'
      ,'[^RGB]*'
      ,'(...)\\1*.?'
      ,'[FUCHSIA].W[FUCHSIA].*W'
      ,'(BLACK|LACK|ACK|K)*'
    ],
    y: [
      '([^T]|TK)*(.)\\2'
      ,'(.).(.)(\\1|\\2)*.'
      ,'[COLOR]*'
      ,'[RAINBOW]*'
      ,'(WLL[^RED])*[^L]*'
      ,'T.?[PURPLE]...[DRY].*'
      ,'T*PINK.*BLACK.*'
      ,'(.*)\\1+.?'
      ,'.?.K[IR]*...'
      ,'...[^GREY][GREY]*...'
      ,'[RGB]+[^RGB]R.*'
      ,'(.)(\\1|RED|BLUE|BLACK)*'
      ,'[DARK_RED]*'
    ],
    z: [
      '.(..)\\1*(WHITE)*'
      ,'.*(RED)?R.*RED'
      ,'[WHITE]*'
      ,'[BLUE]+([RGB]*[PINK]*){2}'
      ,'...*[^E]...'
      ,'.*W.*[IR]{2}..'
      ,'.[^RED]*'
      ,'(RED)?.*(BLUE)+.*(GREEN)?'
      ,'([RT].[RT])+...[PINK]+'
      ,'.*(WHITE|PINK|BLACK|LIGHT|DARK)'
      ,'...[OR][AN][GE]...'
      ,'...[RGBLD]*...'
      ,'.[LIGHT_BLUE]*...'
    ],
  },
  'digital': {
    'size': 13,
    'author': 'Emi',
    'x': [
      '(IF|AA|LS)*.',
      '.*AYA.*',
      '.*([16])[FMA]*\\1',
      '.*OFF.*ON.*',
      '(.C|.CPP.)+..B.?',
      '[^LED]*[BIN].',
      '(.+)(.)\\1\\2[BE]+(.+\\2)\\3.',
      '[JMP]{5}.*[IO]{5}',
      '.[MAP]*BFS.*[TEST]',
      '.([^BP]|BP)*B?',
      '[STACK]*',
      '([CAST]).\\1.*X86.*',
      '.?(YYYY|MM|DD)*.?'
    ],
    'y': [
      '#[0-9A-F]{6}',
      '[BINARY]*',
      '[AND]*[OR]*[NOT]*',
      'F*.B.B*',
      '[FUNCTION]*.[SH]*',
      '[FORK_BOMB]*.',
      '.*IF.*[THEN].*ELSE.*',
      '([^FP]|FP)*',
      '.[BMP]*[SYM]{3}',
      '[CODE]*[MORE]{3}[TIS100]*.',
      '.*JAVA.*',
      '.[PRINT]*[DIRS]*',
      '(..).*\\1.*'
    ],
    'z': [
      '.*MOUSE.*',
      '.(C|CPP)*',
      '([^IO]|IO)*',
      'F*.[JPEG]*',
      '..(..)\\1+[PROGRAM]*',
      'A*F*H+[^PARTITION]*',
      '.*KEY.*BOARD.*',
      '[MAP]*OF[N][^MAPS]*',
      '(.)(.).*\\2\\1.*\\1.',
      '[BIT]*[BYTE]*',
      '(.)(.)(.)\\3\\1\\2\\1.*',
      '.*([^ABI]).*\\1.*',
      '(..).*\\1.?'
    ]
  },
  'animanga': {
    'size': 13,
    author: 'BlueTinge',
    x: [
      '.*BAKA.*'
      ,'.*SENPAI.*'
      ,'.*CHIBI.*'
      ,'.*SUGOI.*'
      ,'.*ONII.CHAN.*'
      ,'.*NANI(I(I?)?)?'
      ,'.*DESU.*DESU.*'
      ,'[DOKI]+[^DOKI]+[DOKI]'
      ,'U?(FU)+[^FU]'
      ,'.*UWU*OIRA.*'
      ,'.[^YUME]*'
      ,'(.)(.)(.)(.)(\1|\2|\3|\4)*'
      ,'(.)(.).(\1|\2)*'
    ],
    y: [
      '[KUI]*KUI[KUI*]'
      ,'[HA-I]*[K-U]*'
      ,'[KAWAII]*[DESU]*'
      ,'.*[KAMEHAMEHA]{3}'
      ,'[^A]*(WAA|GYAAA|KYAAAA).*'
      ,'[ORE]+[BOKU]+[WATASHI]+[UCHI]+'
      ,'(.)(.)(\1|\2)*(GIRI)+(\1|\2)*'
      ,'(.)(.)(\1|\2)*ISEKAI(\1|\2)*'
      ,'(.)(.)(.)(\3\2\1).*(\4).*'
      ,'[OMAE]*[WA]*[MOU]*.[SHINDERU]*'
      ,'[KUREMASU]*'
      ,'[MOE]{2}.*'
      ,'[DAIJOUBU]*'
    ],
    z: [
      '.*OUO.*OUO.*'
      ,'(.)(.)(\1|\2)*.(\1|\2)'
      ,'[TSUNDERE]*'
      ,'.*([^ONIISAN]).*\1.*\1.*'
      ,'[^UWU]*[UWU][^OWO]*'
      ,'[A-I]*B.*FUJI.*'
      ,'(.).*\1.*\1.*\1.*\1.*'
      ,'([^OTAKU]).*\1.*\1.*\1.*'
      ,'[NANI]*!+'
      ,'.*[HI_WAIFUS]{2}.{3,4}'
      ,'.*UMAI.*'
      ,'([^OWO]|3OWO)*'
      ,'.*KERO.*'
    ],
  },
  'very_simple-367': {
    'size': 13,
    'author': 'joosep',
    'y': [
      '.*A.*J.*',
      '.*X.*Z.*',
      '.*I.*.W.*D.*',
      '.*Z.*Q.*J.*',
      '.*A.*X.*O.*',
      '.*A.*(W.|A).*J.*',
      '.*R.*R.*H.*',
      '.*G.*J.*V.*',
      '.*W.*W.*Z.*',
      '.*R.*D.*V.*',
      '.*(B.|L).*Z.*J.*',
      '.*[IY].*R.*',
      '.*E.*R.*'
    ],
    'x': [
      '.*R.*X.*',
      '.*G.*X.*',
      '.*[RG].*Z.*Q.*',
      '.*V.*R.*N.*',
      '.*R.*J.*T.*',
      '.*X.*W.*Z.*',
      '.*E.*W.*Z.*',
      '.*C.*V.*J.*',
      '.*W.*Z.*G.*',
      '.*R.*V.*X.*',
      '.*B.*C.*[VC].*',
      '.*C.*Z.*',
      '.*R.*W.*'
    ],
    'z': [
      '.*R.*E.*',
      '.*K.*R.*',
      '.*A.*W.*W.*',
      '.*B.*R.*F.*',
      '.*I.*[BS].*R.*',
      '.*X.*[NI].*Z.*',
      '.*X.*Y.*R.*',
      '.*A.*X.*J.*',
      '.*W.*J.*C.*',
      '.*M.*W.*F.*',
      '.*T.*A.*W.*',
      '.*E.*D.*',
      '.*A.*Z.*'
    ],
    'name': '1389815346593367',
  },
  'generated-518': {
    'size': 13,
    'author': 'joosep',
    'y': [
      '.*(UN|O).*T.*', '.*M.*J.*', '.*D.*A.*W.*', '.*T..*W.*R.*', '.*I.*[MK].*V.*', '.*A.*F.*Z.*', '.*T.*T.*R.*', '.*H.*U.*(G.|P).*', '.*G.*G.*E.*', '.*T.*[OQ].*X.*', '.*H.*V.*F.*', '.*Z.*B.*', '.*I.*U.*'], 
    'x': [
      '.*A.*J.*', '.*E.*TC.*', '.*X.*N.*D.*', '.*Q.*J.*E.*', '.*G.*A.*T.*', '.*T.*R.*G.*', '.*Z.*E.*Z.*', '.*I.*G.*R.*', '.*B.*E.*A.*', '.*V.*E.*I.*', '.*A.*O.*R.*', '.*Q.*Z.*', '.*I.*X.*'], 
    'z': [
      '.*T.*Q.*', '.*A.*G.*', '.*I.*T.*K.*', '.*D.*R.*B..*', '.*T.*U.*B.*', '.*C.*F.*V.*', '.*D.*A.*Q.*', '.*J.*F.*O.*', '.*Q.*S.*R.*', '.*A.*R.*MX.*', '.*G.*G.*T.*', '.*J.*R.*', '.*I.*Z.*']
	},
  'generated-520': {
    'size': 13,
    'author': 'joosep',
    'x': [
      '[RC].*[CN].', '.*.L', 'G[OL].*[WL][NQ]G.', '.*V.*[VL].[TO][NL]', '.*O', '[LOR]*[TO]C.*[BL].[BE][WZ]', '[LZ]+.*[BC][LRT]+.', '.*N.*[ZE]Q.', '.[TB][WL]G.*', 'W.*.*', '.*R.*', 'Q.LN.*', '.*V.*.'
    ],
    'y': [
      '.L.*[WZ].', '[CN].*[TO].*[RT].', '.*.*LQ.', 'B[CL][WL].*[ZE][EN][RZ]', '.TC.QQ[BC]W.VQ', '.*Q.*[QE].*..', '[RC].*O.*.*.', '.*[GN][BO][ZL]', 'G.*', '.*.N.*', '.*.*[VN]', '[RL][ZL].*..[NQ]', '.*Q.'
    ],
    'z': [
      '[RC]EG[QL].*', '.[RN].*[ZL]T', '.*[ZG][OTV]+Z.*', 'B.*.*W', '.*[WL].*', '.*[WL].*B.*Q', '.*[NQ][VL].*G.*', 'L.*.*L[NQ]', '.*R[BL].*', '.*.[RL]W[WO].*', 'O[BE]L.*', '[WZ][RT]Q.*', '.*..'
    ]
  },
  'generated-500': {
    'size': 13,
    'author': 'joosep',
    'x': [
      'N.*[IA]', '.*[KO]NQ.', '.[NO].*[QI][DKT]*[IN]', 'Q...*C.*', '[KQT]+Q[TD]N[CD][CD].*', '[CQ].*...D', '.*N[IV].*.[KC].*', '.*I.*C.*', '[QV]+VD.*', 'K.*', '.*[IC][IKV]+TO[TN]A', '.*', '.*'
    ],
    'y': [
      '.*D[QO]', '.*[TK].*', '.*T[KO]', 'Q.*C.*', '[NQT]+N.*..NNVA', '.[CN].*', '.*TIA.O[QK][TO]', '.*[QN]', '..KN.*OI.*', '.*D.[VK].*', 'T[QD]A.*..', '.*[IA]Q.*', '[DKO]+[QV]K.K[QO]'
    ],
    'z': [
      'N..[QT]+[CQ][KD]', '.*[QD].O', '[CNQ]+[QK].K.A[IA][QV]', '[QT]+N.QNN[TD]QK', '.*IV.*', '.*', '.*[CD][CQ]T.*[IC].[QO]', '.*O.*', '.*AA.*', '[IOT]*.[CKN]+[ID].*', '[TK]..C.*[QV]', 'D.*[KC]V[TN][QK][QN]', '[QO].[KO].*.[TO]'
    ]
  },
  'generated-517': {
    'size': 13,
    'author': 'joosep',
    'x': [
      '[PQ].*', '...[RI].*', '.*[IE].*', 'R.*P', 'VJ.*QR.D.P', '..*D[IV][YD]', 'E*[YE]..*[JD]', '.*J.*', '.*R', 'JEQ.*Y.[YD][JP]+', '.*[JE].*', '.*.[DRV]+..Y', 'PYJ[QJ]CV[RC]'
    ],
    'y': [
      'JQ.*[JD]', '[VD]C..*', '.*DD[VE]IR', '.*[IE]D.[RI][QV]+.P', '.*[PE]', '.*[VC]Q.*D.*.Y', '[PQ].*[ID][IV]+.*', '.[RE]..*', '.[YD].[EJQ]*.*', 'RJ[YC].*[CD].*', '.*E[YJ][CE]Q..J', '.*.[EV]+D[PR]Y', 'E.[JR]J[JC]PP'
    ],
    'z': [
      '[PQ].*', '..*J.*', '.*[PQ]..[YC]E.[JR]', '.*J', '..*..*[JC]', '.*Q..[IJV]+Q.*', '.*.D.*', 'Q.*', '..D[RI].*J', 'P.*[QR].*R[QJ]', '[IPV]+[VE].*', '[YD][IR]+.*', '.*RP[EPY]*[RC]'
    ]
  },
  'generated-533': {
    'size': 13,
    'author': 'joosep',
    'x': [
      '.*[ST]', '[MVW]+G[TB].[WA]..', '.*BW..', '.*', '.*[QJ][GTW]+A.*[JA].', '[VA]E.*G[ETW]+.J', '.*V.*TJ[QJ]', '.*.[WQ].A.*', 'E[SA].*V', '[QE]..[EG].W.*', 'QS.*.', '.*T', '[ABW]*V.*'
    ],
    'y': [
      '.*', '...S[JA].J.', '[AJW]+W.*T.V', '.*G', '.[TB].T[QA]G[WE][WB][SE][TB].', '.*..*[TJ][AVW]+.T', 'AM[VG][ST].*E.*', '[WV].*[WG].*[WQ].*...', '.*', '.GSEG[EG][EGS]+TV', '.E.A.*.[VB]B', '[VA][SG].[SA].S.A', '.[QM]E.*'
    ],
    'z': [
      'A.*', '.*[SG][QM]', '.*', '.*[ST][GMW]+E[AS]+[QE]', 'J.*T.QG.*', '.*[JA].*.[AMS]+', '.*.[WB]', '.*[AG]SG.*A', '.S.E[WE][AEW]+[VE]TB', 'W.*.[WB][WA].*', '.*.[QS]', 'J.*', '[QJ].*'
    ]
  },
  'generated-550': {
    'size': 13,
    'author': 'joosep',
    'x': [
      '..*', '.*[VE].*', '[UM].*QQG[PV][PU][HV]', 'KJ.*[QL].*', '.*V.*..', '.*E.*U[VF]L', '.*U.*.[EHU]+', '[JC].*.[RC]U.*', '.*[KE]V.*', '[QN]NM[RK]FW[PG]LLH', '.*[HF].*[WG]G', '.*.Q.[KM]', 'EW.*.H.'
    ],
    'y': [
      '[NPQ]+[HV][WJ].*', '[WQ].*[VF][HE].', '.*U.*.', 'N.*[PL][HC]U.H', '[QUW]*[QL][CRU]+.*LG', '.[VE][MNQ]*.*U.*', '.*U.*', '[CE][PK].*G[HQ]+', '[UM].*[HF].*..', 'K.*.[EKR]+U.*', '.*CN.', '.*.N.*W', '[QG][JC].*[FG][CEG]+'
    ],
    'z': [
      '.[CE][UM]KW.*', '.*[PK].*[JC]', 'W.*.', 'NUQ[VM].*H.[QN]', 'L.*[MN].*QN[FG]', '.*QW[HF].*[CG]', '.*REUCV.*', 'P[PU].[KG][UC].*F[NUW]+', '.*.', '.*U.*G.*', '.*.U.L.*', '.*H', 'U.*'
    ]
  },
  'generated-566': {
    'size': 13,
    'author': 'joosep',
    'x': [
      '[JF][TK][OJ][OJ].*.', '.*[FC]L.*..', '.*K[CKO]+.[DOQ]+', 'L[QF].Q.[TJ]D[FLQ]+O', '[LF][KL][OD]Q.*DJ.F.', '[JKQ]+CCL[CDO]+.T[CF]*', '.*O.*[KF]QKF', '.*L.*K[TO]J.[KC]', '.*[OC][LO].*', 'O.*O[TK]..LC', 'D.[FO][FC].*', '.*FK[TJ].*.', '.*.'
    ],
    'y': [
      '.*.O.[FC]F', '.*QFFK[KC]', '.L.*Q.[LF]', '[OJ].*', '.*[TO].LC', '[TK][FC]K.*..C.', '.*C.', '.*.QL[LD].[KD][TK].*.', '[FLQ]+[OD]C[QL].*O[JLT]+', 'L[KL]C.*[FC]K.', '.*', '.*[FD]F.*', '.*DODFD'
    ],
    'z': [
      '[JF][JC][FL]+[QJ].', '.*[QF][KL]K[DLO]+', '[OJ][FC][LO].[OD][CKT]+[TJ]D', '.*Q[CQ]+O[JL][DFO]+', '.[LD]K.*L[QL][KLQ]+FD', '[JD]L.[TJ].*..F', '..*.D', '.[QO][LF]JD[TF][FD][KD].*', '.*[TK].*', '.*T[KF][TO].*[TJ].', '.*..[JK].L', '.*C.', '.*..'
    ]
  },
  'generated-584': {
    'size': 13,
    'author': 'joosep',
    'x': [
      'Z.*', '.Z.*Y[CNP]*', 'Z.*[ZV][CN][CHL]+', '.*[YC]VZ.J', '[YV]P.HQ*P[VD].Y[ZD]', '.*.[LPV]+C.', '.*.D.*ZC', 'N.[DNZ]+[QN]J.[DLZ]+..', '.*', '.*.P.*.[YQ][ZQ][PV]', '.*..*', 'ZVJ[LD].*', '[JD][JD]D[HD][CHP]+[YL]'
    ],
    'y': [
      '.*', '.CH.YCZ.', '.*.[QV]', '.*[ZV].*[PL].*[ZJ][PV]', '..*.[LP]*.[ZQ]J', '.*..', 'ZZ..Q.*[PQ][YL]', '.*N.*', '.*NHL..P', '.P.*P[YL][DHL]+', '.*[ND][DJ]+', '.*QV[JD]', '.*[HP].Z[JD]'
    ],
    'z': [
      'Z.*.[YV][CLP]+', '.*[YJ]P..N', '..*', '[HD].*', '..*N.*', '.Y[ZV][CQY]+.*C.QZ', '[YH][CN]+VP.*P[ND]V[JD]', '.*Z.*J.*', '.*[LV][QJ].[DL]*', 'J.*N.*.[HD]', '.*[YQ][JD][JPZ]+', '.*[ZJ].*[HC]', 'C.[QV][PV]J.*'
    ]
  },
  'generated-605': {
    'size': 13,
    'author': 'joosep',
    'x': [
      '.*.[EMP]*[LG]', '.*[DE].*D[BD][PB]', '.*[PE]', '.*[PK]PG[PB][EG]', '.L.*[LD]', '.*[KG].[PM].*', '.*M.*[LM].*', '.*[KE]...*', '[EM]+[PD][BKL]+D[LM].L.*', '.*M[GKM]+M.*', 'P[DG]..ED.*[KD]', '.*[KD]G[LB][PD]', '.*.[DG]'
    ],
    'y': [
      '.*[KM]', '.*.M', 'ED[BG].*', '.*.K.', '.*[PK].*[LM].[GL]+[KD]', 'G[DE][MB]DK.*PM[PD]', '.K.*.[DEK]*[LM]M.*', '.*.', '[MD].*L.*.', '.*[MD].*.', '.[DG].*.L.', '[MG].[PG].*', '..*'
    ],
    'z': [
      '.*[MG].', '.*[DG]..', '.*[MG].*[PG]E', '.[MB][MB].*M.*', 'E[KE][PG].*', '[DMP]*K.*[PG][DG][ME]', '[LG][BD].*[KE]PL.*.', '.*[BE][EKM]+D..[DL]*', '[BEP]+L.[LM][GLM]+G.*', '[EG]E.*', '.*LP.*', '.*', '[KM]M..*'
    ]
  },
  'generated-625': {
    'size': 13,
    'author': 'joosep',
    'x': [
      '.*', '[ZW].*[VD]', '..*..[WQ]', '.*[QA].*.', '.*.BWR.*.', '[UW].*ZM.A.', '[QRZ]+[BD].*[XV].*A', '.*W.*', 'Q[UD].*', 'R[QD][QB].*...', '.*[VM].[ZR]R[QA][RE]', 'QQ[MA].*[RE].', '.*Q.*'
    ],
    'y': [
      '.[VD].*', '..*A[BDM]*', '[ZE].*..*', '.*M[ZM].M[ZR].*.', '.*R[EWZ]+.*[RE]', '.*.', '.*[XV].*R[DER]+', '[ZW].[QA].[ZM].*U.*', '.*[XB].*', '[ZM][ZU][XU]..A.*', '.*[QB].*', '.*QV', 'R.*Q.'
    ],
    'z': [
      '.*', '.*.', '.*[XU].*Q', '..*[UD]R', '.*[MD]B[ZM]Z.*', '.*[MA]Q.*', '.*[XV].[ZM][UW].*', '[VD]..*[MA]V', '[WQ].*[XB]', '.D.*[WE][ZR]..', '.*V.E.[AQR]+', '.*.[QA][RE].', 'A.D.[RE].*'
    ]
  },
  'generated-662': {
    'size': 13,
    'author': 'joosep',
    'x': [
      '.*', '.*H.*[BE].*', '..*', '.*[SD]..P.RN[HN]', '.[PR][IB]Y..P.*.', 'H.*.[SD][YP]B.', '.*I..*', '[SE].*[PE].*P[DY]+', '[XY][PB][HP][BD].*[XS]B.*', 'HRN.Y.B.*', '.*E.*[HB].', 'N[YB][YI]HB.[SD]D', '.*E.*'
    ],
    'y': [
      '[RN].*.[EHS]*', 'N.*Y', '[DE][BE][EHR]+[YS][YP].*', '.*[RI].*[PI]R', '.E[DPY]+P..[RI]B..', '.*.[XS]S[HB]D', '.*B.*', '.*[PE].*..', '..*[SI].*', '.[PR][NB].*E.*', '.*.[HP]N[HB][YI]H', '.*Y[PB]R[BD][BXY]+', '.*EN.'
    ],
    'z': [
      'D[XN].*.H[XD]', '.*', '.*[SD][IB][NB][PN]Y[XY]', '.*Y.*', '[DE].*.[HP]RE', '.*P.*N', '[RN]E.*P.*.', '.[XD]R.*YE[YI]X', '.*..*[SI]H*', '[HN].*.[RI][XS]B.[BE]*', '.BRPB.*', '.*.[HB][SD].', '.*.[DP]+'
    ]
  }
}
