!(function() {
  function c(c, t) {
    if (!(c instanceof t))
      throw new TypeError('Cannot call a class as a function');
  }
  function t(c, t) {
    for (var n = 0; n < t.length; n++) {
      var _ = t[n];
      (_.enumerable = _.enumerable || !1),
        (_.configurable = !0),
        'value' in _ && (_.writable = !0),
        Object.defineProperty(c, _.key, _);
    }
  }
  function n(c, n, _) {
    return n && t(c.prototype, n), _ && t(c, _), c;
  }
  (window.webpackJsonp = window.webpackJsonp || []).push([
    [22],
    {
      '91Gy': function(t, _, b) {
        'use strict';
        b.r(_),
          b.d(_, 'TermsModule', function() {
            return E;
          });
        var r,
          e,
          a,
          i,
          s = b('M0Rk'),
          F = b('ZpN7'),
          p = b('tyNb'),
          o = b('ey9i'),
          h = b('fXoL'),
          l = b('8ynp'),
          m = b('wHSu'),
          g = b('sYmb'),
          M =
            (((r = (function() {
              function t(n) {
                c(this, t), (this.translate = n), (this.tag = m.t);
              }
              return n(t, [{ key: 'ngOnInit', value: function() {} }]), t;
            })()).ɵfac = function(c) {
              return new (c || r)(h.Lb(g.c));
            }),
            (r.ɵcmp = h.Fb({
              type: r,
              selectors: [['dc-terms-terms']],
              decls: 422,
              vars: 303,
              consts: [
                [1, 'section', 'terms'],
                [1, 'container', 'pt-md-9'],
                [1, 'text-secondary', 'small', 'bold'],
                [1, 'my-4'],
                [1, 'bold'],
                [1, 'text-uppercase', 'mb-5'],
                [1, 'text-uppercase']
              ],
              template: function(c, t) {
                1 & c &&
                  (h.Qb(0, 'section', 0),
                  h.Fc(1, '\n  '),
                  h.Qb(2, 'div', 1),
                  h.Fc(3, '\n    '),
                  h.Qb(4, 'h1'),
                  h.Fc(5),
                  h.gc(6, 'translate'),
                  h.Pb(),
                  h.Fc(7, '\n    '),
                  h.Qb(8, 'p', 2),
                  h.Fc(9),
                  h.gc(10, 'translate'),
                  h.Pb(),
                  h.Fc(11, '\n\n    '),
                  h.Mb(12, 'hr', 3),
                  h.Fc(13, '\n\n    '),
                  h.Qb(14, 'p', 4),
                  h.Fc(15),
                  h.gc(16, 'translate'),
                  h.Pb(),
                  h.Fc(17, '\n    '),
                  h.Qb(18, 'p'),
                  h.Fc(19),
                  h.gc(20, 'translate'),
                  h.Pb(),
                  h.Fc(21, '\n\n    '),
                  h.Mb(22, 'p', 5),
                  h.Fc(23, '\n\n    '),
                  h.Qb(24, 'h3'),
                  h.Fc(25),
                  h.gc(26, 'translate'),
                  h.Pb(),
                  h.Fc(27, '\n    '),
                  h.Qb(28, 'p', 4),
                  h.Fc(29),
                  h.gc(30, 'translate'),
                  h.Pb(),
                  h.Fc(31, '\n    '),
                  h.Qb(32, 'p'),
                  h.Fc(33),
                  h.gc(34, 'translate'),
                  h.Pb(),
                  h.Fc(35, '\n\n    '),
                  h.Qb(36, 'h3'),
                  h.Fc(37),
                  h.gc(38, 'translate'),
                  h.Pb(),
                  h.Fc(39, '\n    '),
                  h.Qb(40, 'p'),
                  h.Fc(41),
                  h.gc(42, 'translate'),
                  h.Pb(),
                  h.Fc(43, '\n    '),
                  h.Mb(44, 'p'),
                  h.Fc(45, '\n\n    '),
                  h.Qb(46, 'h3'),
                  h.Fc(47),
                  h.gc(48, 'translate'),
                  h.Pb(),
                  h.Fc(49, '\n    '),
                  h.Qb(50, 'p'),
                  h.Fc(51),
                  h.gc(52, 'translate'),
                  h.Pb(),
                  h.Fc(53, '\n\n    '),
                  h.Qb(54, 'h3'),
                  h.Fc(55),
                  h.gc(56, 'translate'),
                  h.Pb(),
                  h.Fc(57, '\n    '),
                  h.Qb(58, 'p', 6),
                  h.Fc(59),
                  h.gc(60, 'translate'),
                  h.Pb(),
                  h.Fc(61, '\n    '),
                  h.Mb(62, 'p', 6),
                  h.Fc(63, '\n\n    '),
                  h.Qb(64, 'h3'),
                  h.Fc(65),
                  h.gc(66, 'translate'),
                  h.Pb(),
                  h.Fc(67, '\n    '),
                  h.Qb(68, 'p'),
                  h.Fc(69),
                  h.gc(70, 'translate'),
                  h.Pb(),
                  h.Fc(71, '\n\n    '),
                  h.Qb(72, 'h3'),
                  h.Fc(73),
                  h.gc(74, 'translate'),
                  h.Pb(),
                  h.Fc(75, '\n    '),
                  h.Qb(76, 'p', 6),
                  h.Fc(77),
                  h.gc(78, 'translate'),
                  h.Pb(),
                  h.Fc(79, '\n    '),
                  h.Mb(80, 'p', 6),
                  h.Fc(81, '\n\n    '),
                  h.Qb(82, 'h3'),
                  h.Fc(83),
                  h.gc(84, 'translate'),
                  h.Pb(),
                  h.Fc(85, '\n    '),
                  h.Qb(86, 'p', 6),
                  h.Fc(87),
                  h.gc(88, 'translate'),
                  h.Pb(),
                  h.Fc(89, '\n    '),
                  h.Qb(90, 'p', 6),
                  h.Fc(91),
                  h.gc(92, 'translate'),
                  h.Pb(),
                  h.Fc(93, '\n\n    '),
                  h.Qb(94, 'h3'),
                  h.Fc(95),
                  h.gc(96, 'translate'),
                  h.Pb(),
                  h.Fc(97, '\n    '),
                  h.Qb(98, 'p', 6),
                  h.Fc(99),
                  h.gc(100, 'translate'),
                  h.Pb(),
                  h.Fc(101, '\n    '),
                  h.Qb(102, 'p', 6),
                  h.Fc(103),
                  h.gc(104, 'translate'),
                  h.Pb(),
                  h.Fc(105, '\n    '),
                  h.Qb(106, 'p', 6),
                  h.Fc(107),
                  h.gc(108, 'translate'),
                  h.Pb(),
                  h.Fc(109, '\n    '),
                  h.Qb(110, 'p', 6),
                  h.Fc(111),
                  h.gc(112, 'translate'),
                  h.Pb(),
                  h.Fc(113, '\n    '),
                  h.Qb(114, 'p', 6),
                  h.Fc(115),
                  h.gc(116, 'translate'),
                  h.Pb(),
                  h.Fc(117, '\n    '),
                  h.Qb(118, 'p', 6),
                  h.Fc(119),
                  h.gc(120, 'translate'),
                  h.Pb(),
                  h.Fc(121, '\n    '),
                  h.Qb(122, 'p', 6),
                  h.Fc(123),
                  h.gc(124, 'translate'),
                  h.Pb(),
                  h.Fc(125, '\n    '),
                  h.Qb(126, 'p', 6),
                  h.Fc(127),
                  h.gc(128, 'translate'),
                  h.Pb(),
                  h.Fc(129, '\n    '),
                  h.Qb(130, 'p', 6),
                  h.Fc(131),
                  h.gc(132, 'translate'),
                  h.Pb(),
                  h.Fc(133, '\n    '),
                  h.Qb(134, 'p', 6),
                  h.Fc(135),
                  h.gc(136, 'translate'),
                  h.Pb(),
                  h.Fc(137, '\n    '),
                  h.Qb(138, 'p', 6),
                  h.Fc(139),
                  h.gc(140, 'translate'),
                  h.Pb(),
                  h.Fc(141, '\n    '),
                  h.Qb(142, 'p', 6),
                  h.Fc(143),
                  h.gc(144, 'translate'),
                  h.Pb(),
                  h.Fc(145, '\n    '),
                  h.Qb(146, 'p', 6),
                  h.Fc(147),
                  h.gc(148, 'translate'),
                  h.Pb(),
                  h.Fc(149, '\n    '),
                  h.Qb(150, 'p', 6),
                  h.Fc(151),
                  h.gc(152, 'translate'),
                  h.Pb(),
                  h.Fc(153, '\n    '),
                  h.Qb(154, 'p', 6),
                  h.Fc(155),
                  h.gc(156, 'translate'),
                  h.Pb(),
                  h.Fc(157, '\n    '),
                  h.Qb(158, 'p', 6),
                  h.Fc(159),
                  h.gc(160, 'translate'),
                  h.Pb(),
                  h.Fc(161, '\n    '),
                  h.Qb(162, 'p', 6),
                  h.Fc(163),
                  h.gc(164, 'translate'),
                  h.Pb(),
                  h.Fc(165, '\n    '),
                  h.Qb(166, 'p', 6),
                  h.Fc(167),
                  h.gc(168, 'translate'),
                  h.Pb(),
                  h.Fc(169, '\n    '),
                  h.Qb(170, 'p', 6),
                  h.Fc(171),
                  h.gc(172, 'translate'),
                  h.Pb(),
                  h.Fc(173, '\n\n    '),
                  h.Qb(174, 'h3'),
                  h.Fc(175),
                  h.gc(176, 'translate'),
                  h.Pb(),
                  h.Fc(177, '\n    '),
                  h.Qb(178, 'p', 6),
                  h.Fc(179),
                  h.gc(180, 'translate'),
                  h.Pb(),
                  h.Fc(181, '\n    '),
                  h.Qb(182, 'p', 6),
                  h.Fc(183),
                  h.gc(184, 'translate'),
                  h.Pb(),
                  h.Fc(185, '\n    '),
                  h.Qb(186, 'h3'),
                  h.Fc(187),
                  h.gc(188, 'translate'),
                  h.Pb(),
                  h.Fc(189, '\n    '),
                  h.Qb(190, 'p', 6),
                  h.Fc(191),
                  h.gc(192, 'translate'),
                  h.Pb(),
                  h.Fc(193, '\n    '),
                  h.Qb(194, 'p', 6),
                  h.Fc(195),
                  h.gc(196, 'translate'),
                  h.Pb(),
                  h.Fc(197, '\n    '),
                  h.Qb(198, 'p', 6),
                  h.Fc(199),
                  h.gc(200, 'translate'),
                  h.Pb(),
                  h.Fc(201, '\n    '),
                  h.Qb(202, 'p', 6),
                  h.Fc(203),
                  h.gc(204, 'translate'),
                  h.Pb(),
                  h.Fc(205, '\n    '),
                  h.Qb(206, 'p', 6),
                  h.Fc(207),
                  h.gc(208, 'translate'),
                  h.Pb(),
                  h.Fc(209, '\n    '),
                  h.Qb(210, 'p', 6),
                  h.Fc(211),
                  h.gc(212, 'translate'),
                  h.Pb(),
                  h.Fc(213, '\n    '),
                  h.Qb(214, 'p', 6),
                  h.Fc(215),
                  h.gc(216, 'translate'),
                  h.Pb(),
                  h.Fc(217, '\n    '),
                  h.Qb(218, 'p', 6),
                  h.Fc(219),
                  h.gc(220, 'translate'),
                  h.Pb(),
                  h.Fc(221, '\n    '),
                  h.Qb(222, 'p', 6),
                  h.Fc(223),
                  h.gc(224, 'translate'),
                  h.Pb(),
                  h.Fc(225, '\n    '),
                  h.Qb(226, 'p', 6),
                  h.Fc(227),
                  h.gc(228, 'translate'),
                  h.Pb(),
                  h.Fc(229, '\n    '),
                  h.Qb(230, 'p', 6),
                  h.Fc(231),
                  h.gc(232, 'translate'),
                  h.Pb(),
                  h.Fc(233, '\n    '),
                  h.Qb(234, 'p', 6),
                  h.Fc(235),
                  h.gc(236, 'translate'),
                  h.Pb(),
                  h.Fc(237, '\n    '),
                  h.Qb(238, 'p', 6),
                  h.Fc(239),
                  h.gc(240, 'translate'),
                  h.Pb(),
                  h.Fc(241, '\n    '),
                  h.Qb(242, 'p', 6),
                  h.Fc(243),
                  h.gc(244, 'translate'),
                  h.Pb(),
                  h.Fc(245, '\n    '),
                  h.Qb(246, 'p', 6),
                  h.Fc(247),
                  h.gc(248, 'translate'),
                  h.Pb(),
                  h.Fc(249, '\n    '),
                  h.Qb(250, 'p', 6),
                  h.Fc(251),
                  h.gc(252, 'translate'),
                  h.Pb(),
                  h.Fc(253, '\n    '),
                  h.Qb(254, 'p', 6),
                  h.Fc(255),
                  h.gc(256, 'translate'),
                  h.Pb(),
                  h.Fc(257, '\n    '),
                  h.Qb(258, 'h3'),
                  h.Fc(259),
                  h.gc(260, 'translate'),
                  h.Pb(),
                  h.Fc(261, '\n    '),
                  h.Qb(262, 'p', 6),
                  h.Fc(263),
                  h.gc(264, 'translate'),
                  h.Pb(),
                  h.Fc(265, '\n    '),
                  h.Qb(266, 'h3'),
                  h.Fc(267),
                  h.gc(268, 'translate'),
                  h.Pb(),
                  h.Fc(269, '\n    '),
                  h.Qb(270, 'p', 6),
                  h.Fc(271),
                  h.gc(272, 'translate'),
                  h.Pb(),
                  h.Fc(273, '\n    '),
                  h.Qb(274, 'h3'),
                  h.Fc(275),
                  h.gc(276, 'translate'),
                  h.Pb(),
                  h.Fc(277, '\n    '),
                  h.Qb(278, 'p', 6),
                  h.Fc(279),
                  h.gc(280, 'translate'),
                  h.Pb(),
                  h.Fc(281, '\n    '),
                  h.Qb(282, 'h3'),
                  h.Fc(283),
                  h.gc(284, 'translate'),
                  h.Pb(),
                  h.Fc(285, '\n    '),
                  h.Qb(286, 'p', 6),
                  h.Fc(287),
                  h.gc(288, 'translate'),
                  h.Pb(),
                  h.Fc(289, '\n    '),
                  h.Qb(290, 'h3'),
                  h.Fc(291),
                  h.gc(292, 'translate'),
                  h.Pb(),
                  h.Fc(293, '\n    '),
                  h.Qb(294, 'p', 6),
                  h.Fc(295),
                  h.gc(296, 'translate'),
                  h.Pb(),
                  h.Fc(297, '\n    '),
                  h.Qb(298, 'h3'),
                  h.Fc(299),
                  h.gc(300, 'translate'),
                  h.Pb(),
                  h.Fc(301, '\n    '),
                  h.Qb(302, 'p', 6),
                  h.Fc(303),
                  h.gc(304, 'translate'),
                  h.Pb(),
                  h.Fc(305, '\n    '),
                  h.Qb(306, 'p', 6),
                  h.Fc(307),
                  h.gc(308, 'translate'),
                  h.Pb(),
                  h.Fc(309, '\n    '),
                  h.Qb(310, 'p', 6),
                  h.Fc(311),
                  h.gc(312, 'translate'),
                  h.Pb(),
                  h.Fc(313, '\n    '),
                  h.Qb(314, 'p', 6),
                  h.Fc(315),
                  h.gc(316, 'translate'),
                  h.Pb(),
                  h.Fc(317, '\n    '),
                  h.Qb(318, 'p', 6),
                  h.Fc(319),
                  h.gc(320, 'translate'),
                  h.Pb(),
                  h.Fc(321, '\n    '),
                  h.Qb(322, 'p', 6),
                  h.Fc(323),
                  h.gc(324, 'translate'),
                  h.Pb(),
                  h.Fc(325, '\n    '),
                  h.Qb(326, 'p', 6),
                  h.Fc(327),
                  h.gc(328, 'translate'),
                  h.Pb(),
                  h.Fc(329, '\n    '),
                  h.Qb(330, 'p', 6),
                  h.Fc(331),
                  h.gc(332, 'translate'),
                  h.Pb(),
                  h.Fc(333, '\n    '),
                  h.Qb(334, 'p', 6),
                  h.Fc(335),
                  h.gc(336, 'translate'),
                  h.Pb(),
                  h.Fc(337, '\n    '),
                  h.Qb(338, 'h3'),
                  h.Fc(339),
                  h.gc(340, 'translate'),
                  h.Pb(),
                  h.Fc(341, '\n    '),
                  h.Qb(342, 'p', 6),
                  h.Fc(343),
                  h.gc(344, 'translate'),
                  h.Pb(),
                  h.Fc(345, '\n    '),
                  h.Qb(346, 'p', 6),
                  h.Fc(347),
                  h.gc(348, 'translate'),
                  h.Pb(),
                  h.Fc(349, '\n    '),
                  h.Qb(350, 'p', 6),
                  h.Fc(351),
                  h.gc(352, 'translate'),
                  h.Pb(),
                  h.Fc(353, '\n    '),
                  h.Qb(354, 'p', 6),
                  h.Fc(355),
                  h.gc(356, 'translate'),
                  h.Pb(),
                  h.Fc(357, '\n    '),
                  h.Qb(358, 'h3'),
                  h.Fc(359),
                  h.gc(360, 'translate'),
                  h.Pb(),
                  h.Fc(361, '\n    '),
                  h.Qb(362, 'p', 6),
                  h.Fc(363),
                  h.gc(364, 'translate'),
                  h.Pb(),
                  h.Fc(365, '\n    '),
                  h.Qb(366, 'p', 6),
                  h.Fc(367),
                  h.gc(368, 'translate'),
                  h.Pb(),
                  h.Fc(369, '\n    '),
                  h.Qb(370, 'p', 6),
                  h.Fc(371),
                  h.gc(372, 'translate'),
                  h.Pb(),
                  h.Fc(373, '\n    '),
                  h.Qb(374, 'p', 6),
                  h.Fc(375),
                  h.gc(376, 'translate'),
                  h.Pb(),
                  h.Fc(377, '\n    '),
                  h.Qb(378, 'p', 6),
                  h.Fc(379),
                  h.gc(380, 'translate'),
                  h.Pb(),
                  h.Fc(381, '\n    '),
                  h.Qb(382, 'p', 6),
                  h.Fc(383),
                  h.gc(384, 'translate'),
                  h.Pb(),
                  h.Fc(385, '\n    '),
                  h.Qb(386, 'h3'),
                  h.Fc(387),
                  h.gc(388, 'translate'),
                  h.Pb(),
                  h.Fc(389, '\n    '),
                  h.Qb(390, 'p', 6),
                  h.Fc(391),
                  h.gc(392, 'translate'),
                  h.Pb(),
                  h.Fc(393, '\n    '),
                  h.Qb(394, 'h3'),
                  h.Fc(395),
                  h.gc(396, 'translate'),
                  h.Pb(),
                  h.Fc(397, '\n    '),
                  h.Qb(398, 'p', 6),
                  h.Fc(399),
                  h.gc(400, 'translate'),
                  h.Pb(),
                  h.Fc(401, '\n    '),
                  h.Qb(402, 'h3'),
                  h.Fc(403),
                  h.gc(404, 'translate'),
                  h.Pb(),
                  h.Fc(405, '\n    '),
                  h.Qb(406, 'p', 6),
                  h.Fc(407),
                  h.gc(408, 'translate'),
                  h.Pb(),
                  h.Fc(409, '\n    '),
                  h.Qb(410, 'h3'),
                  h.Fc(411),
                  h.gc(412, 'translate'),
                  h.Pb(),
                  h.Fc(413, '\n    '),
                  h.Qb(414, 'p', 6),
                  h.Fc(415),
                  h.gc(416, 'translate'),
                  h.Pb(),
                  h.Fc(417, '\n\n    '),
                  h.Mb(418, 'p'),
                  h.Fc(419, '\n  '),
                  h.Pb(),
                  h.Fc(420, '\n'),
                  h.Pb(),
                  h.Fc(421, '\n')),
                  2 & c &&
                    (h.xb(5),
                    h.Gc(h.hc(6, 101, 'TERMS.trm_terms_of_use')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(10, 103, 'TERMS.trm_last_update'),
                      '\n    '
                    ),
                    h.xb(6),
                    h.Gc(h.hc(16, 105, 'TERMS.trm_general_information')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(20, 107, 'TERMS.trm_introduction'),
                      '\n    '
                    ),
                    h.xb(6),
                    h.Gc(h.hc(26, 109, 'TERMS.trm_1_acceptance_terms')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(30, 111, 'TERMS.trm_1_acceptance_terms_1'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(34, 113, 'TERMS.trm_1_acceptance_terms_2'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Gc(h.hc(38, 115, 'TERMS.trm_2_eligibility')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(42, 117, 'TERMS.trm_2_eligibility_1'),
                      '\n    '
                    ),
                    h.xb(6),
                    h.Gc(h.hc(48, 119, 'TERMS.trm_3_user_accounts')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(52, 121, 'TERMS.trm_3_user_accounts_1'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Gc(h.hc(56, 123, 'TERMS.trm_4_terms_termination')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(60, 125, 'TERMS.trm_4_terms_termination_1'),
                      '\n    '
                    ),
                    h.xb(6),
                    h.Gc(h.hc(66, 127, 'TERMS.trm_5_non_commercial_use')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(70, 129, 'TERMS.trm_5_non_commercial_use_1'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Gc(h.hc(74, 131, 'TERMS.trm_6_the_services')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(78, 133, 'TERMS.trm_6_the_services_1'),
                      '\n    '
                    ),
                    h.xb(6),
                    h.Gc(h.hc(84, 135, 'TERMS.trm_7_interactions')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(88, 137, 'TERMS.trm_7_interactions_1'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(92, 139, 'TERMS.trm_7_interactions_2'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Gc(h.hc(96, 141, 'TERMS.trm_8_content_posted')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(100, 143, 'TERMS.trm_8_content_posted_1'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(104, 145, 'TERMS.trm_8_content_posted_2'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(108, 147, 'TERMS.trm_8_content_posted_3'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(112, 149, 'TERMS.trm_8_content_posted_4'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(116, 151, 'TERMS.trm_8_content_posted_4_1'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(120, 153, 'TERMS.trm_8_content_posted_4_2'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(124, 155, 'TERMS.trm_8_content_posted_4_3'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(128, 157, 'TERMS.trm_8_content_posted_4_4'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(132, 159, 'TERMS.trm_8_content_posted_4_5'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(136, 161, 'TERMS.trm_8_content_posted_4_6'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(140, 163, 'TERMS.trm_8_content_posted_4_7'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(144, 165, 'TERMS.trm_8_content_posted_4_8'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(148, 167, 'TERMS.trm_8_content_posted_4_9'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(152, 169, 'TERMS.trm_8_content_posted_4_10'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(156, 171, 'TERMS.trm_8_content_posted_4_11'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(160, 173, 'TERMS.trm_8_content_posted_4_12'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(164, 175, 'TERMS.trm_8_content_posted_4_13'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(168, 177, 'TERMS.trm_8_content_posted_4_14'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(172, 179, 'TERMS.trm_8_content_posted_text'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Gc(h.hc(176, 181, 'TERMS.trm_9_use_service_0')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(180, 183, 'TERMS.trm_9_use_service'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(184, 185, 'TERMS.trm_10_agree_content'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Gc(h.hc(188, 187, 'TERMS.trm_11_prohibited_activities')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(192, 189, 'TERMS.trm_11_prohibited_activities_1'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(196, 191, 'TERMS.trm_11_prohibited_activities_1_1'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(200, 193, 'TERMS.trm_11_prohibited_activities_1_2'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(204, 195, 'TERMS.trm_11_prohibited_activities_1_3'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(208, 197, 'TERMS.trm_11_prohibited_activities_1_4'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(212, 199, 'TERMS.trm_11_prohibited_activities_1_5'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(216, 201, 'TERMS.trm_11_prohibited_activities_1_6'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(220, 203, 'TERMS.trm_11_prohibited_activities_1_7'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(224, 205, 'TERMS.trm_11_prohibited_activities_1_8'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(228, 207, 'TERMS.trm_11_prohibited_activities_1_9'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(232, 209, 'TERMS.trm_11_prohibited_activities_1_10'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(236, 211, 'TERMS.trm_11_prohibited_activities_1_11'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(240, 213, 'TERMS.trm_11_prohibited_activities_1_12'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(244, 215, 'TERMS.trm_11_prohibited_activities_1_13'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(248, 217, 'TERMS.trm_11_prohibited_activities_1_14'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(252, 219, 'TERMS.trm_11_prohibited_activities_1_15'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(256, 221, 'TERMS.trm_11_prohibited_activities_1_16'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Gc(h.hc(260, 223, 'TERMS.trm_12_propietary_rights')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(264, 225, 'TERMS.trm_12_propietary_rights_1'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Gc(h.hc(268, 227, 'TERMS.trm_13_ownership')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(272, 229, 'TERMS.trm_13_ownership_1'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Gc(h.hc(276, 231, 'TERMS.trm_14_user_provided_content')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(280, 233, 'TERMS.trm_14_user_provided_content_1'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Gc(h.hc(284, 235, 'TERMS.trm_15_network_access_devices')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(288, 237, 'TERMS.trm_15_network_access_devices_1'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Gc(h.hc(292, 239, 'TERMS.trm_16_modifications_service')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(296, 241, 'TERMS.trm_16_modifications_service_1'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Gc(h.hc(300, 243, 'TERMS.trm_17_copyright_policy')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(304, 245, 'TERMS.trm_17_copyright_policy_1'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(308, 247, 'TERMS.trm_17_copyright_policy_1_1'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(312, 249, 'TERMS.trm_17_copyright_policy_1_2'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(316, 251, 'TERMS.trm_17_copyright_policy_1_3'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(320, 253, 'TERMS.trm_17_copyright_policy_1_4'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(324, 255, 'TERMS.trm_17_copyright_policy_1_5'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(328, 257, 'TERMS.trm_17_copyright_policy_1_6'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(332, 259, 'TERMS.trm_17_copyright_policy_1_text'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(336, 261, 'TERMS.trm_17_copyright_policy_1_text1'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Gc(h.hc(340, 263, 'TERMS.trm_17_disclaimers')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(344, 265, 'TERMS.trm_17_disclaimers_0'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(348, 267, 'TERMS.trm_17_disclaimers_1'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(352, 269, 'TERMS.trm_17_limitation'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(356, 271, 'TERMS.trm_17_limitation_1'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Gc(h.hc(360, 273, 'TERMS.trm_18_arbitration')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(364, 275, 'TERMS.trm_18_arbitration_p'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(368, 277, 'TERMS.trm_18_arbitration_i_01'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(372, 279, 'TERMS.trm_18_arbitration_i_02'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(376, 281, 'TERMS.trm_18_arbitration_i_03'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(380, 283, 'TERMS.trm_18_arbitration_i_04'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(384, 285, 'TERMS.trm_18_arbitration_p_1'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Gc(h.hc(388, 287, 'TERMS.trm_19_')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(392, 289, 'TERMS.trm_19_p'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Gc(h.hc(396, 291, 'TERMS.trm_20_')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(400, 293, 'TERMS.trm_20_p'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Gc(h.hc(404, 295, 'TERMS.trm_21_')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(408, 297, 'TERMS.trm_21_p'),
                      '\n    '
                    ),
                    h.xb(4),
                    h.Gc(h.hc(412, 299, 'TERMS.trm_question')),
                    h.xb(4),
                    h.Hc(
                      '\n      ',
                      h.hc(416, 301, 'TERMS.trm_privacy_policy'),
                      '\n    '
                    ));
              },
              pipes: [g.b],
              styles: ['']
            })),
            r),
          S = [
            {
              path: '',
              component:
                ((e = (function() {
                  function t(n) {
                    c(this, t), (this.i18nService = n), this.updateSeoTags();
                  }
                  return (
                    n(t, [
                      {
                        key: 'ngOnInit',
                        value: function() {
                          this.updateSeoTags();
                        }
                      },
                      {
                        key: 'updateSeoTags',
                        value: function() {
                          this.i18nService.updateSeoTags(
                            'DEMOS.SAAS.NETWORK_SEARCH_META.TITLE',
                            'DEMOS.SAAS.NETWORK_SEARCH_META.KEYWORDS'
                          );
                        }
                      }
                    ]),
                    t
                  );
                })()),
                (e.ɵfac = function(c) {
                  return new (c || e)(h.Lb(o.a));
                }),
                (e.ɵcmp = h.Fb({
                  type: e,
                  selectors: [['dc-terms']],
                  decls: 7,
                  vars: 1,
                  consts: [
                    [3, 'darkLinks'],
                    [1, 'position-relative', 'overflow-hidden']
                  ],
                  template: function(c, t) {
                    1 & c &&
                      (h.Mb(0, 'dc-navbar-default', 0),
                      h.Fc(1, '\n'),
                      h.Qb(2, 'main', 1),
                      h.Fc(3, '\n  '),
                      h.Mb(4, 'dc-terms-terms'),
                      h.Fc(5, '\n'),
                      h.Pb(),
                      h.Fc(6, '\n')),
                      2 & c && h.kc('darkLinks', !0);
                  },
                  directives: [l.a, M],
                  styles: ['']
                })),
                e),
              data: { title: Object(o.c)('About') }
            }
          ],
          T =
            (((i = function t() {
              c(this, t);
            }).ɵmod = h.Jb({ type: i })),
            (i.ɵinj = h.Ib({
              factory: function(c) {
                return new (c || i)();
              },
              imports: [[p.g.forChild(S)], p.g]
            })),
            i),
          E =
            (((a = function t() {
              c(this, t);
            }).ɵmod = h.Jb({ type: a })),
            (a.ɵinj = h.Ib({
              factory: function(c) {
                return new (c || a)();
              },
              imports: [[s.a, F.a, T, g.a.forChild()]]
            })),
            a);
      },
      M0Rk: function(t, n, _) {
        'use strict';
        _.d(n, 'a', function() {
          return i;
        });
        var b = _('tyNb'),
          r = _('M0ag'),
          e = _('sYmb'),
          a = _('fXoL'),
          i = (function() {
            var t = function t() {
              c(this, t);
            };
            return (
              (t.ɵmod = a.Jb({ type: t })),
              (t.ɵinj = a.Ib({
                factory: function(c) {
                  return new (c || t)();
                },
                imports: [[r.a, b.g, e.a.forChild()]]
              })),
              t
            );
          })();
      }
    }
  ]);
})();
