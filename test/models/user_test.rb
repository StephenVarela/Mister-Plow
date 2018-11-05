require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  def test_user_factory_is_valid
    user = build(:user)
    assert(user.valid?)
  end

  def test_user_can_be_created_and_saved

  end

end
