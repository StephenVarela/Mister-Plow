require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  def test_user_factory_is_valid

  end

  def test_user_can_be_created_and_saved
    user = create(:user)
    p user
    p User.count

    expected = User.first


    assert_equal(expected, user)
  end

end
