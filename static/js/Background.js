/**
 * This is the class that takes care of drawing champions to the background.
 * @author Alvin Lin (alvin.lin@stuypulse.com)
 */

function Background() {}

Background.BGS = ['aatrox_0.jpg', 'aatrox_1.jpg', 'aatrox_2.jpg',
                  'aatrox_3.jpg', 'ahri_0.jpg', 'ahri_1.jpg', 'ahri_2.jpg',
                  'ahri_3.jpg', 'ahri_4.jpg', 'ahri_5.jpg', 'akali_0.jpg',
                  'akali_1.jpg', 'akali_2.jpg', 'akali_3.jpg', 'akali_4.jpg',
                  'akali_5.jpg', 'akali_6.jpg', 'akali_7.jpg', 'alistar_0.jpg',
                  'alistar_1.jpg', 'alistar_2.jpg', 'alistar_3.jpg',
                  'alistar_4.jpg', 'alistar_5.jpg', 'alistar_6.jpg',
                  'alistar_7.jpg', 'amumu_0.jpg', 'amumu_1.jpg', 'amumu_2.jpg',
                  'amumu_3.jpg', 'amumu_4.jpg', 'amumu_5.jpg', 'amumu_6.jpg',
                  'amumu_7.jpg', 'amumu_8.jpg', 'anivia_0.jpg', 'anivia_1.jpg',
                  'anivia_2.jpg', 'anivia_3.jpg', 'anivia_4.jpg',
                  'anivia_5.jpg', 'anivia_6.jpg', 'annie_0.jpg', 'annie_1.jpg',
                  'annie_2.jpg', 'annie_3.jpg', 'annie_4.jpg', 'annie_5.jpg',
                  'annie_6.jpg', 'annie_7.jpg', 'annie_8.jpg', 'annie_9.jpg',
                  'ashe_0.jpg', 'ashe_1.jpg', 'ashe_2.jpg', 'ashe_3.jpg',
                  'ashe_4.jpg', 'ashe_5.jpg', 'ashe_6.jpg', 'ashe_7.jpg',
                  'azir_0.jpg', 'azir_1.jpg', 'bard_0.jpg', 'bard_1.jpg',
                  'blitzcrank_0.jpg', 'blitzcrank_1.jpg', 'blitzcrank_2.jpg',
                  'blitzcrank_3.jpg', 'blitzcrank_4.jpg', 'blitzcrank_5.jpg',
                  'blitzcrank_6.jpg', 'blitzcrank_7.jpg', 'brand_0.jpg',
                  'brand_1.jpg', 'brand_2.jpg', 'brand_3.jpg', 'brand_4.jpg',
                  'braum_0.jpg', 'braum_1.jpg', 'braum_2.jpg', 'caitlyn_0.jpg',
                  'caitlyn_1.jpg', 'caitlyn_2.jpg', 'caitlyn_3.jpg',
                  'caitlyn_4.jpg', 'caitlyn_5.jpg', 'caitlyn_6.jpg',
                  'cassiopeia_0.jpg', 'cassiopeia_1.jpg', 'cassiopeia_2.jpg',
                  'cassiopeia_3.jpg', 'cassiopeia_4.jpg', 'chogath_0.jpg',
                  'chogath_1.jpg', 'chogath_2.jpg', 'chogath_3.jpg',
                  'chogath_4.jpg', 'chogath_5.jpg', 'chogath_6.jpg',
                  'corki_0.jpg', 'corki_1.jpg', 'corki_2.jpg', 'corki_3.jpg',
                  'corki_4.jpg', 'corki_5.jpg', 'corki_6.jpg', 'corki_7.jpg',
                  'darius_0.jpg', 'darius_1.jpg', 'darius_2.jpg',
                  'darius_3.jpg', 'darius_4.jpg', 'diana_0.jpg', 'diana_1.jpg',
                  'diana_2.jpg', 'draven_0.jpg', 'draven_1.jpg', 'draven_2.jpg',
                  'draven_3.jpg', 'draven_4.jpg', 'drmundo_0.jpg',
                  'drmundo_1.jpg', 'drmundo_2.jpg', 'drmundo_3.jpg',
                  'drmundo_4.jpg', 'drmundo_5.jpg', 'drmundo_6.jpg',
                  'drmundo_7.jpg', 'drmundo_8.jpg', 'ekko_0.jpg', 'ekko_1.jpg',
                  'elise_0.jpg', 'elise_1.jpg', 'elise_2.jpg', 'elise_3.jpg',
                  'evelynn_0.jpg', 'evelynn_1.jpg', 'evelynn_2.jpg',
                  'evelynn_3.jpg', 'evelynn_4.jpg', 'ezreal_0.jpg',
                  'ezreal_1.jpg', 'ezreal_2.jpg', 'ezreal_3.jpg',
                  'ezreal_4.jpg', 'ezreal_5.jpg', 'ezreal_6.jpg',
                  'ezreal_7.jpg', 'ezreal_8.jpg', 'fiddlesticks_0.jpg',
                  'fiddlesticks_1.jpg', 'fiddlesticks_2.jpg',
                  'fiddlesticks_3.jpg', 'fiddlesticks_4.jpg',
                  'fiddlesticks_5.jpg', 'fiddlesticks_6.jpg',
                  'fiddlesticks_7.jpg', 'fiddlesticks_8.jpg', 'fiora_0.jpg',
                  'fiora_1.jpg', 'fiora_2.jpg', 'fiora_3.jpg', 'fizz_0.jpg',
                  'fizz_1.jpg', 'fizz_2.jpg', 'fizz_3.jpg', 'fizz_4.jpg',
                  'fizz_8.jpg', 'galio_0.jpg', 'galio_1.jpg', 'galio_2.jpg',
                  'galio_3.jpg', 'galio_4.jpg', 'galio_5.jpg',
                  'gangplank_0.jpg', 'gangplank_1.jpg', 'gangplank_2.jpg',
                  'gangplank_3.jpg', 'gangplank_4.jpg', 'gangplank_5.jpg',
                  'gangplank_6.jpg', 'gangplank_7.jpg', 'garen_0.jpg',
                  'garen_10.jpg', 'garen_1.jpg', 'garen_2.jpg', 'garen_3.jpg',
                  'garen_4.jpg', 'garen_5.jpg', 'garen_6.jpg', 'gnar_0.jpg',
                  'gnar_1.jpg', 'gnar_2.jpg', 'gragas_0.jpg', 'gragas_1.jpg',
                  'gragas_2.jpg', 'gragas_3.jpg', 'gragas_4.jpg',
                  'gragas_5.jpg', 'gragas_6.jpg', 'gragas_7.jpg',
                  'gragas_8.jpg', 'graves_0.jpg', 'graves_1.jpg',
                  'graves_2.jpg', 'graves_3.jpg', 'graves_4.jpg',
                  'graves_5.jpg', 'graves_6.jpg', 'hecarim_0.jpg',
                  'hecarim_1.jpg', 'hecarim_2.jpg', 'hecarim_3.jpg',
                  'hecarim_4.jpg', 'heimerdinger_0.jpg', 'heimerdinger_1.jpg',
                  'heimerdinger_2.jpg', 'heimerdinger_3.jpg',
                  'heimerdinger_4.jpg', 'heimerdinger_5.jpg', 'irelia_0.jpg',
                  'irelia_1.jpg', 'irelia_2.jpg', 'irelia_3.jpg',
                  'irelia_4.jpg', 'irelia_5.jpg', 'janna_0.jpg', 'janna_1.jpg',
                  'janna_2.jpg', 'janna_3.jpg', 'janna_4.jpg', 'janna_5.jpg',
                  'janna_6.jpg', 'jarvaniv_0.jpg', 'jarvaniv_1.jpg',
                  'jarvaniv_2.jpg', 'jarvaniv_3.jpg', 'jarvaniv_4.jpg',
                  'jarvaniv_5.jpg', 'jarvaniv_6.jpg', 'jax_0.jpg', 'jax_1.jpg',
                  'jax_2.jpg', 'jax_3.jpg', 'jax_4.jpg', 'jax_5.jpg',
                  'jax_6.jpg', 'jax_7.jpg', 'jax_8.jpg', 'jayce_0.jpg',
                  'jayce_1.jpg', 'jayce_2.jpg', 'jayce_3.jpg', 'jinx_0.jpg',
                  'jinx_1.jpg', 'jinx_2.jpg', 'kalista_0.jpg', 'kalista_1.jpg',
                  'karma_0.jpg', 'karma_1.jpg', 'karma_2.jpg', 'karma_3.jpg',
                  'karma_4.jpg', 'karthus_0.jpg', 'karthus_1.jpg',
                  'karthus_2.jpg', 'karthus_3.jpg', 'karthus_4.jpg',
                  'karthus_5.jpg', 'kassadin_0.jpg', 'kassadin_1.jpg',
                  'kassadin_2.jpg', 'kassadin_3.jpg', 'kassadin_4.jpg',
                  'katarina_0.jpg', 'katarina_1.jpg', 'katarina_2.jpg',
                  'katarina_3.jpg', 'katarina_4.jpg', 'katarina_5.jpg',
                  'katarina_6.jpg', 'katarina_7.jpg', 'katarina_8.jpg',
                  'kayle_0.jpg', 'kayle_1.jpg', 'kayle_2.jpg', 'kayle_3.jpg',
                  'kayle_4.jpg', 'kayle_5.jpg', 'kayle_6.jpg', 'kayle_7.jpg',
                  'kennen_0.jpg', 'kennen_1.jpg', 'kennen_2.jpg',
                  'kennen_3.jpg', 'kennen_4.jpg', 'kennen_5.jpg',
                  'khazix_0.jpg', 'khazix_1.jpg', 'khazix_2.jpg',
                  'kogmaw_0.jpg', 'kogmaw_1.jpg', 'kogmaw_2.jpg',
                  'kogmaw_3.jpg', 'kogmaw_4.jpg', 'kogmaw_5.jpg',
                  'kogmaw_6.jpg', 'kogmaw_7.jpg', 'kogmaw_8.jpg',
                  'leblanc_0.jpg', 'leblanc_1.jpg', 'leblanc_2.jpg',
                  'leblanc_3.jpg', 'leblanc_4.jpg', 'leesin_0.jpg',
                  'leesin_10.jpg', 'leesin_1.jpg', 'leesin_2.jpg',
                  'leesin_3.jpg', 'leesin_4.jpg', 'leesin_5.jpg',
                  'leesin_6.jpg', 'leona_0.jpg', 'leona_1.jpg', 'leona_2.jpg',
                  'leona_3.jpg', 'leona_4.jpg', 'lissandra_0.jpg',
                  'lissandra_1.jpg', 'lissandra_2.jpg', 'lucian_0.jpg',
                  'lucian_1.jpg', 'lucian_2.jpg', 'lulu_0.jpg', 'lulu_1.jpg',
                  'lulu_2.jpg', 'lulu_3.jpg', 'lulu_4.jpg', 'lulu_5.jpg',
                  'lux_0.jpg', 'lux_1.jpg', 'lux_2.jpg', 'lux_3.jpg',
                  'lux_4.jpg', 'lux_5.jpg', 'lux_6.jpg', 'malphite_0.jpg',
                  'malphite_1.jpg', 'malphite_2.jpg', 'malphite_3.jpg',
                  'malphite_4.jpg', 'malphite_5.jpg', 'malphite_6.jpg',
                  'malzahar_0.jpg', 'malzahar_1.jpg', 'malzahar_2.jpg',
                  'malzahar_3.jpg', 'malzahar_4.jpg', 'malzahar_5.jpg',
                  'maokai_0.jpg', 'maokai_1.jpg', 'maokai_2.jpg',
                  'maokai_3.jpg', 'maokai_4.jpg', 'maokai_5.jpg',
                  'masteryi_0.jpg', 'masteryi_1.jpg', 'masteryi_2.jpg',
                  'masteryi_3.jpg', 'masteryi_4.jpg', 'masteryi_5.jpg',
                  'missfortune_0.jpg', 'missfortune_1.jpg', 'missfortune_2.jpg',
                  'missfortune_3.jpg', 'missfortune_4.jpg', 'missfortune_5.jpg',
                  'missfortune_6.jpg', 'missfortune_7.jpg', 'missfortune_8.jpg',
                  'mordekaiser_0.jpg', 'mordekaiser_1.jpg', 'mordekaiser_2.jpg',
                  'mordekaiser_3.jpg', 'mordekaiser_4.jpg', 'mordekaiser_5.jpg',
                  'morgana_0.jpg', 'morgana_1.jpg', 'morgana_2.jpg',
                  'morgana_3.jpg', 'morgana_4.jpg', 'morgana_5.jpg',
                  'morgana_6.jpg', 'nami_0.jpg', 'nami_1.jpg', 'nami_2.jpg',
                  'nami_3.jpg', 'nasus_0.jpg', 'nasus_1.jpg', 'nasus_2.jpg',
                  'nasus_3.jpg', 'nasus_4.jpg', 'nasus_5.jpg', 'nasus_6.jpg',
                  'nautilus_0.jpg', 'nautilus_1.jpg', 'nautilus_2.jpg',
                  'nautilus_3.jpg', 'nautilus_4.jpg', 'nidalee_0.jpg',
                  'nidalee_1.jpg', 'nidalee_2.jpg', 'nidalee_3.jpg',
                  'nidalee_4.jpg', 'nidalee_5.jpg', 'nidalee_6.jpg',
                  'nidalee_7.jpg', 'nocturne_0.jpg', 'nocturne_1.jpg',
                  'nocturne_2.jpg', 'nocturne_3.jpg', 'nocturne_4.jpg',
                  'nocturne_5.jpg', 'nunu_0.jpg', 'nunu_1.jpg', 'nunu_2.jpg',
                  'nunu_3.jpg', 'nunu_4.jpg', 'nunu_5.jpg', 'nunu_6.jpg',
                  'olaf_0.jpg', 'olaf_1.jpg', 'olaf_2.jpg', 'olaf_3.jpg',
                  'olaf_4.jpg', 'orianna_0.jpg', 'orianna_1.jpg',
                  'orianna_2.jpg', 'orianna_3.jpg', 'orianna_4.jpg',
                  'orianna_5.jpg', 'pantheon_0.jpg', 'pantheon_1.jpg',
                  'pantheon_2.jpg', 'pantheon_3.jpg', 'pantheon_4.jpg',
                  'pantheon_5.jpg', 'pantheon_6.jpg', 'poppy_0.jpg',
                  'poppy_1.jpg', 'poppy_2.jpg', 'poppy_3.jpg', 'poppy_4.jpg',
                  'poppy_5.jpg', 'poppy_6.jpg', 'quinn_0.jpg', 'quinn_1.jpg',
                  'quinn_2.jpg', 'quinn_3.jpg', 'rammus_0.jpg', 'rammus_1.jpg',
                  'rammus_2.jpg', 'rammus_3.jpg', 'rammus_4.jpg',
                  'rammus_5.jpg', 'rammus_6.jpg', 'rammus_7.jpg',
                  'reksai_0.jpg', 'reksai_1.jpg', 'reksai_2.jpg',
                  'renekton_0.jpg', 'renekton_1.jpg', 'renekton_2.jpg',
                  'renekton_3.jpg', 'renekton_4.jpg', 'renekton_5.jpg',
                  'renekton_6.jpg', 'renekton_7.jpg', 'rengar_0.jpg',
                  'rengar_1.jpg', 'rengar_2.jpg', 'rengar_3.jpg', 'riven_0.jpg',
                  'riven_1.jpg', 'riven_2.jpg', 'riven_3.jpg', 'riven_4.jpg',
                  'riven_5.jpg', 'rumble_0.jpg', 'rumble_1.jpg', 'rumble_2.jpg',
                  'rumble_3.jpg', 'ryze_0.jpg', 'ryze_1.jpg', 'ryze_2.jpg',
                  'ryze_3.jpg', 'ryze_4.jpg', 'ryze_5.jpg', 'ryze_6.jpg',
                  'ryze_7.jpg', 'ryze_8.jpg', 'sejuani_0.jpg', 'sejuani_1.jpg',
                  'sejuani_2.jpg', 'sejuani_3.jpg', 'sejuani_4.jpg',
                  'sejuani_5.jpg', 'shaco_0.jpg', 'shaco_1.jpg', 'shaco_2.jpg',
                  'shaco_3.jpg', 'shaco_4.jpg', 'shaco_5.jpg', 'shaco_6.jpg',
                  'shaco_7.jpg', 'shen_0.jpg', 'shen_1.jpg', 'shen_2.jpg',
                  'shen_3.jpg', 'shen_4.jpg', 'shen_5.jpg', 'shen_6.jpg',
                  'shyvana_0.jpg', 'shyvana_1.jpg', 'shyvana_2.jpg',
                  'shyvana_3.jpg', 'shyvana_4.jpg', 'shyvana_5.jpg',
                  'singed_0.jpg', 'singed_1.jpg', 'singed_2.jpg',
                  'singed_3.jpg', 'singed_4.jpg', 'singed_5.jpg',
                  'singed_6.jpg', 'singed_7.jpg', 'sion_0.jpg', 'sion_1.jpg',
                  'sion_2.jpg', 'sion_3.jpg', 'sion_4.jpg', 'sivir_0.jpg',
                  'sivir_1.jpg', 'sivir_2.jpg', 'sivir_3.jpg', 'sivir_4.jpg',
                  'sivir_5.jpg', 'sivir_6.jpg', 'sivir_7.jpg', 'skarner_0.jpg',
                  'skarner_1.jpg', 'skarner_2.jpg', 'skarner_3.jpg',
                  'skarner_4.jpg', 'sona_0.jpg', 'sona_1.jpg', 'sona_2.jpg',
                  'sona_3.jpg', 'sona_4.jpg', 'sona_5.jpg', 'sona_6.jpg',
                  'soraka_0.jpg', 'soraka_1.jpg', 'soraka_2.jpg',
                  'soraka_3.jpg', 'soraka_4.jpg', 'soraka_5.jpg', 'swain_0.jpg',
                  'swain_1.jpg', 'swain_2.jpg', 'swain_3.jpg', 'syndra_0.jpg',
                  'syndra_1.jpg', 'syndra_2.jpg', 'syndra_3.jpg',
                  'tahmkench_0.jpg', 'tahmkench_1.jpg', 'talon_0.jpg',
                  'talon_1.jpg', 'talon_2.jpg', 'talon_3.jpg', 'talon_4.jpg',
                  'taric_0.jpg', 'taric_1.jpg', 'taric_2.jpg', 'taric_3.jpg',
                  'teemo_0.jpg', 'teemo_1.jpg', 'teemo_2.jpg', 'teemo_3.jpg',
                  'teemo_4.jpg', 'teemo_5.jpg', 'teemo_6.jpg', 'teemo_7.jpg',
                  'teemo_8.jpg', 'thresh_0.jpg', 'thresh_1.jpg', 'thresh_2.jpg',
                  'thresh_3.jpg', 'thresh_4.jpg', 'tmp', 'tristana_0.jpg',
                  'tristana_1.jpg', 'tristana_2.jpg', 'tristana_3.jpg',
                  'tristana_4.jpg', 'tristana_5.jpg', 'tristana_6.jpg',
                  'trundle_0.jpg', 'trundle_1.jpg', 'trundle_2.jpg',
                  'trundle_3.jpg', 'trundle_4.jpg', 'tryndamere_0.jpg',
                  'tryndamere_1.jpg', 'tryndamere_2.jpg', 'tryndamere_3.jpg',
                  'tryndamere_4.jpg', 'tryndamere_5.jpg', 'tryndamere_6.jpg',
                  'tryndamere_7.jpg', 'twistedfate_0.jpg', 'twistedfate_1.jpg',
                  'twistedfate_2.jpg', 'twistedfate_3.jpg', 'twistedfate_4.jpg',
                  'twistedfate_5.jpg', 'twistedfate_6.jpg', 'twistedfate_7.jpg',
                  'twistedfate_8.jpg', 'twistedfate_9.jpg', 'twitch_0.jpg',
                  'twitch_1.jpg', 'twitch_2.jpg', 'twitch_3.jpg',
                  'twitch_4.jpg', 'twitch_5.jpg', 'twitch_6.jpg',
                  'twitch_7.jpg', 'udyr_0.jpg', 'udyr_1.jpg', 'udyr_2.jpg',
                  'udyr_3.jpg', 'udyr_4.jpg', 'urgot_0.jpg', 'urgot_1.jpg',
                  'urgot_2.jpg', 'urgot_3.jpg', 'varus_0.jpg', 'varus_1.jpg',
                  'varus_2.jpg', 'varus_3.jpg', 'varus_4.jpg', 'vayne_0.jpg',
                  'vayne_1.jpg', 'vayne_2.jpg', 'vayne_3.jpg', 'vayne_4.jpg',
                  'vayne_5.jpg', 'vayne_6.jpg', 'veigar_0.jpg', 'veigar_1.jpg',
                  'veigar_2.jpg', 'veigar_3.jpg', 'veigar_4.jpg',
                  'veigar_5.jpg', 'veigar_6.jpg', 'veigar_7.jpg',
                  'veigar_8.jpg', 'velkoz_0.jpg', 'velkoz_1.jpg',
                  'velkoz_2.jpg', 'vi_0.jpg', 'vi_1.jpg', 'vi_2.jpg',
                  'vi_3.jpg', 'viktor_0.jpg', 'viktor_1.jpg', 'viktor_2.jpg',
                  'viktor_3.jpg', 'vladimir_0.jpg', 'vladimir_1.jpg',
                  'vladimir_2.jpg', 'vladimir_3.jpg', 'vladimir_4.jpg',
                  'vladimir_5.jpg', 'vladimir_6.jpg', 'volibear_0.jpg',
                  'volibear_1.jpg', 'volibear_2.jpg', 'volibear_3.jpg',
                  'volibear_4.jpg', 'warwick_0.jpg', 'warwick_1.jpg',
                  'warwick_2.jpg', 'warwick_3.jpg', 'warwick_4.jpg',
                  'warwick_5.jpg', 'warwick_6.jpg', 'warwick_7.jpg',
                  'warwick_8.jpg', 'wukong_0.jpg', 'wukong_1.jpg',
                  'wukong_2.jpg', 'wukong_3.jpg', 'wukong_4.jpg',
                  'xerath_0.jpg', 'xerath_1.jpg', 'xerath_2.jpg',
                  'xerath_3.jpg', 'xerath_4.jpg', 'xinzhao_0.jpg',
                  'xinzhao_1.jpg', 'xinzhao_2.jpg', 'xinzhao_3.jpg',
                  'xinzhao_4.jpg', 'xinzhao_5.jpg', 'xinzhao_6.jpg',
                  'yasuo_0.jpg', 'yasuo_1.jpg', 'yasuo_2.jpg', 'yorick_0.jpg',
                  'yorick_1.jpg', 'yorick_2.jpg', 'zac_0.jpg', 'zac_1.jpg',
                  'zac_2.jpg', 'zed_0.jpg', 'zed_1.jpg', 'zed_2.jpg',
                  'ziggs_0.jpg', 'ziggs_1.jpg', 'ziggs_2.jpg', 'ziggs_3.jpg',
                  'ziggs_4.jpg', 'ziggs_5.jpg', 'zilean_0.jpg', 'zilean_1.jpg',
                  'zilean_2.jpg', 'zilean_3.jpg', 'zilean_4.jpg',
                  'zilean_5.jpg', 'zyra_0.jpg', 'zyra_1.jpg', 'zyra_2.jpg',
                  'zyra_3.jpg'];

Background.displayRandomBackground = function() {
  var bg = Background.BGS[
      Math.floor(Math.random() * Background.BGS.length)];
  $('#background').css(
      'background-image',
      'url("/static/images/splash/' + bg + '")');
}

Background.displayChampionBackground = function(champion) {
  $('#background').css(
      'background-image',
      'url("/static/images/splash/' + champion + '_0.jpg")');
}